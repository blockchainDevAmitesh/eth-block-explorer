import React from "react";

const BlockList = ({blocks, setSelectedBlock}) => {
    return (
        <div className="block-list">
            {blocks.map((block) => (
                <button key={block.number} onClick={() => setSelectedBlock(block)}> {/*Here we provide required argument to setSelectedBlock()*/}
                    Block #{block.number}
                </button>
            ))}
        </div>
    );
};

export default BlockList;