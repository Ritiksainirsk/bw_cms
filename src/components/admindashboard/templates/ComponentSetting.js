import React from 'react';
import Dragable from '../common/Dragable';
import { SlClose } from 'react-icons/sl';
import { TfiSearch } from 'react-icons/tfi';
import SearchComponent from './SearchComponent';
const ComponentSetting = ({itemList, handleChecked, handleDrop, saveComponentSetting, setItemList, openComponent, handleToggle}) => {

    const  componentList = [
        {
            id: 1,
            name: "ComponentOne",
            field: "components",
            description: "Component 1 Description",
            status: "active",
            edit:1,
            checked:0,
        },
        {
            id: 2,
            name: "ComponentTwo",
            field: "components",
            description: "Component 2 Description",
            status: "active",
            edit:1,
            checked:0,
        },
        {
            id: 3,
            name: "ComponentThree",
            field: "components",
            description: "Component 3 Description",
            status: "active",
            edit:1,
            checked:0,
        },
        {
            id: 4,
            name: "ComponentFour",
            field: "components",
            description: "Component 4 Description",
            status: "active",
            edit:1,
            checked:0,
        },
        {
            id: 5,
            name: "ComponentFive",
            field: "components",
            description: "Component 5 Description",
            status: "active",
            edit:1,
            checked:0,
        },
        {
            id: 6,
            name: "ComponentSix",
            field: "components",
            description: "Component 6 Description",
            status: "active",
            edit:1,
            checked:0,
        },
    ];

    itemList = itemList.length > 0 ? itemList : 
    setItemList([
        {
            id: 1,
            name: "ComponentOne",
            field: "components",
            description: "Component 1 Description",
            status: "active",
            edit:1,
            checked:0,
        },
        {
            id: 2,
            name: "ComponentTwo",
            field: "components",
            description: "Component 2 Description",
            status: "active",
            edit:1,
            checked:0,
        }
    ]);

  return (
    <div className={`offcanvas offcanvas-end ${openComponent ? `show` : ``}`} data-bs-scroll="true" tabIndex="-1" id="filtersetting" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Page Component Setting</h5>
            <SlClose className="offclose" role="button" data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => handleToggle()}  />
        </div>
        <div className="offcanvas-body">
            <div className="mt-4 vertical-last">
                <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Search Component</h5>
                <SearchComponent 
                itemList={itemList} 
                setItemList={setItemList} 
                componentList={componentList} 
                />
            </div>
            <div className="mt-4 vertical-last">
                <Dragable 
                itemList={itemList} 
                handleChecked={handleChecked} 
                handleDrop={handleDrop} 
                />
                <div className="form-outline d-flex justify-content-between align-items-center mt-auto" style={{gap: "12px"}}>
                    <button className="btn btn-outline-primary w-100" type="button" data-bs-dismiss="offcanvas" aria-label="Close">Cancel</button>
                    <button className="btn btn-primary w-100" onClick={() => saveComponentSetting()}>Save</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ComponentSetting