"use client"

import { Button } from "@material-tailwind/react";
import { useRef } from "react"

export default function FileDragDropZone() {

    const fileRef = useRef(null)

    return (
        <form 
            onSubmit={(e) => {
                e.preventDefault();
                const file = fileRef.current.files?.[0];
                console.log(file);
            } }
            className="w-full py-20 border-4 border-dotted border-indigo-700 flex flex-col items-center justify-center">
            <input ref={fileRef} type="file" className="" />
            <p>파일을 여기에 끌어다 놓거나 클릭하여 업로드하세요.</p>
            <Button type="submit">파일 업로드</Button>
        </form>
    )
}