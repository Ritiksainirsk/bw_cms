import React from "react"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { RxDragHandleDots2 } from "react-icons/rx"

const Dragable = ({ itemList = [], handleChecked, handleDrop }) => {
  if (!Array.isArray(itemList)) {
    return null;
  }

  return (
    <DragDropContext onDragEnd={handleDrop}>
      <Droppable droppableId="list-container">
        {(provided) => (
          <div
            className="list-container mb-5"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {itemList.map((item, index) => (
              <Draggable key={item.id} draggableId={`${item.id}`} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                  >
                    <div className="form-control d-flex align-items-center mb-1 dragable" style={{ padding: "10px 12px" }}>
                      <RxDragHandleDots2 className="dragableicon" />
                      <input
                        className="form-checkbox form-check-input"
                        type="checkbox"
                        name={item.field}
                        onChange={(e) => handleChecked({target: {name: item.name}})}
                        checked={item?.checked === 1 ? 1 : 0}
                        disabled={item?.edit === 1 ? 0 : 1}
                      />
                      <label className="form-checkbox-label">{item.name}</label>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}

      </Droppable>
    </DragDropContext>
  );
};

export default Dragable