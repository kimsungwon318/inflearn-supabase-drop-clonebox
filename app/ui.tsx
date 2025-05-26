"use client";

import DropboxImageList from "components/dropbox-image-list";
import FileDragDropZone from "components/file-dragdropzone";
import Logo from "components/logo";
import SearchComponent from "components/search-component";
import Image from "next/image";
import { useState } from "react";

export default function UI() {
  const [searchInput, setSearchInput] = useState("");
  

  return (
    <div className="w-2/3 mx-auto flex flex-col items-center py-10 gap-2">
      <Logo />
      <SearchComponent
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <FileDragDropZone />
      <DropboxImageList />
    </div>
  );
}
