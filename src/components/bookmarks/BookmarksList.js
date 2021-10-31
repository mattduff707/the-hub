import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Loading from "../Loading";
import Heading from "../Heading";
import Bookmark from "./Bookmark";
import List from "../List";

import BookmarkForm from "./BookmarkForm";
import BookmarkSearch from "./BookmarkSearch";
import Btn from "../Btn";

const BookmarksList = () => {
  const { bookmarks, error, loading } = useSelector((state) => state.bookmarks);

  const [bookmarkEdit, setBookmarkEdit] = useState(false);
  const [bookmarkAdd, setBookmarkAdd] = useState(false);
  const [searchText, setSearchText] = useState("");

  const createList = (arr) => {
    return arr.map((item, index) => (
      <Bookmark
        key={item.title + index}
        bookmark={item}
        setBookmarkEdit={setBookmarkEdit}
      />
    ));
  };

  const filterListBySearch = (arr, query) => {
    return arr.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  };
  console.log(filterListBySearch(bookmarks, searchText));

  if (loading) {
    return (
      <LoadWrap>
        <Loading />
      </LoadWrap>
    );
  }
  if (error) {
    return <p>Error!</p>;
  }

  return (
    <Wrapper>
      <Heading tag={"h2"}>Bookmarks</Heading>
      {bookmarkEdit ? (
        <BookmarkForm
          title={bookmarkEdit.title}
          base_url={bookmarkEdit.base_url}
          search_url={bookmarkEdit.search_url}
          favorite={bookmarkEdit.favorite}
          _id={bookmarkEdit._id}
          setBookmarkFormState={setBookmarkEdit}
        />
      ) : bookmarkAdd ? (
        <BookmarkForm setBookmarkFormState={setBookmarkAdd} />
      ) : (
        <>
          <BookmarkSearch
            searchText={searchText}
            setSearchText={setSearchText}
          />
          <List>
            <BtnWrap>
              <AddBookmarkBtn handleClick={() => setBookmarkAdd(true)}>
                New Bookmark
              </AddBookmarkBtn>
            </BtnWrap>
            {createList(filterListBySearch(bookmarks, searchText))}
          </List>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: visible;
`;
const LoadWrap = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -20px;
`;
const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0px;
`;
const AddBookmarkBtn = styled(Btn)`
  padding: 5px 10px;
  font-size: 1rem;
`;
export default BookmarksList;
