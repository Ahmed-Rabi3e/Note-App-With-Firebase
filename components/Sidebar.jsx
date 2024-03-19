import React from "react"

export default function Sidebar(props) {
    const noteElements = props.notes.map((note, index) => (
        <div key={note.id} className="">
            <div

                className={`title p-4 ${note.id === props.currentNote.id ? "selected-note" : ""
                    }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
                <button
                    className="delete-btn"
                    onClick={() => props.deleteNote(note.id)}
                >
                    <i className="gg-trash trash-icon"></i>
                </button>
            </div>
        </div>
    ))

    return (
        <section className="overflow-y-auto w-1/4 h-screen">
            <div className="flex justify-around items-center">
                <h3 className="font-bold text-3xl p-2">Notes</h3>
                <button className="cursor-pointer bg-[#4a4e74] border-none text-white rounded-md w-8 h-8" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
