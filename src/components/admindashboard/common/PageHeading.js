import React from 'react';
// import FieldSelect from '../../field/FieldSelect';
import Select from 'react-select';

const PageHeading = ({ title, data, handleTestFilter, filters, isPermission }) => {
    const option = data?.map((item, i) => { return { label: item.exam_name, value: item.exam_id } });
    const handleChange = (selectedOption) => {
        handleTestFilter({
            target: {
                name: 'exam_id',
                value: selectedOption ? selectedOption.value : '',
            }
        });
    };

    return (
        <>
            <div className="row mb-3">
                <div className="col-md-12 d-flex align-items-center gap-4">
                    <h3 className="title m-0">{title}</h3>
                    {option && isPermission ?
                        <div className="" style={{width: 300, minWidth: 300}}>
                            {/* <FieldSelect
                                name={"exam_id"}
                                options={option}
                                placeholder={"All Tests"}
                                onChange={handleChange}
                                isClearable /> */}
                            <Select
                                name="exam_id"
                                options={option}
                                placeholder={"All Tests"}
                                onChange={handleChange}
                                isClearable
                            />
                        </div>
                        : ""}
                </div>
            </div>
        </>
    )
}

export default PageHeading
