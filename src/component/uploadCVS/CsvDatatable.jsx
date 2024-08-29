import React, { useState } from "react";

const CsvDataTable = ({ data, darkMode }) => {
  const [selectedTags, setSelectedTags] = useState(Array(data.length).fill([]));
  const [isDropdownOpen, setIsDropdownOpen] = useState(
    Array(data.length).fill(false)
  );

  const availableTags = Array.from({ length: 10 }, (_, i) => `Tag ${i + 1}`);

  const handleTagChange = (e, rowIndex) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );

    setSelectedTags((prevTags) => {
      const updatedTags = [...prevTags];
      const currentSelectedTags = updatedTags[rowIndex];
      const newSelectedTags = [
        ...new Set([...currentSelectedTags, ...selectedOptions]),
      ];

      updatedTags[rowIndex] = newSelectedTags;
      return updatedTags;
    });

    setIsDropdownOpen((prevState) => {
      const updatedState = [...prevState];
      updatedState[rowIndex] = false;
      return updatedState;
    });
  };

  const handleRemoveTag = (tagToRemove, rowIndex) => {
    setSelectedTags((prevTags) => {
      const updatedTags = [...prevTags];
      updatedTags[rowIndex] = updatedTags[rowIndex].filter(
        (tag) => tag !== tagToRemove
      );
      return updatedTags;
    });
  };

  const toggleDropdown = (rowIndex) => {
    setIsDropdownOpen((prevState) => {
      const updatedState = [...prevState];
      updatedState[rowIndex] = !updatedState[rowIndex];
      return updatedState;
    });
  };

  return (
    <div className="mt-48">
      <p 
        className={`text-3xl font-semibold py-4 my-4 ${
          darkMode ? "text-white" : "text-black"
        }`}
      >Uploads</p>
      {" "}
      <div
        className={`text-center p-4 rounded-lg ${
          darkMode ? "bg-black" : "bg-white"
        }`}
      >
        <div className="overflow-x-auto">
          <div className="min-w-[750px] md:min-w-full">
            <table
              className="min-w-full border-separate"
              style={{ borderSpacing: "0 10px" }}
            >
              <thead>
                <tr>
                  <th
                    className={`p-2 ${
                      darkMode ? "bg-gray-900" : "bg-gray-100"
                    }`}
                  >
                    Sl No.
                  </th>
                  <th
                    className={`p-2 ${
                      darkMode ? "bg-gray-900" : "bg-gray-100"
                    }`}
                  >
                    Links
                  </th>
                  <th
                    className={`p-2 ${
                      darkMode ? "bg-gray-900" : "bg-gray-100"
                    }`}
                  >
                    Prefix
                  </th>
                  <th
                    className={`p-2 ${
                      darkMode ? "bg-gray-900" : "bg-gray-100"
                    }`}
                  >
                    Add Tags
                  </th>
                  <th
                    className={`p-2 ${
                      darkMode ? "bg-gray-900" : "bg-gray-100"
                    }`}
                  >
                    Selected Tags
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={` ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}
                  >
                    <td className="p-4 rounded-l-lg">{rowIndex + 1}</td>
                    <td className="p-4">{row.links}</td>
                    <td className="p-4">{row.prefix}</td>
                    <td className="p-4">
                      <button
                        className={`p-1 rounded ${
                          darkMode ? "text-white" : "text-black"
                        }`}
                        onClick={() => toggleDropdown(rowIndex)}
                      >
                        Select Tags
                      </button>
                      {isDropdownOpen[rowIndex] && (
                        <div
                          className={`absolute shadow-lg z-10 text-center rounded-lg ${
                            darkMode ? "bg-black" : "bg-white"
                          }`}
                        >
                          <select
                            multiple
                            onChange={(e) => handleTagChange(e, rowIndex)}
                            className={`focus:outline-none text-center p-4 rounded-lg ${
                              darkMode ? "bg-black" : "bg-white"
                            }`}
                          >
                            {availableTags.map((tag) => (
                              <option
                                key={tag}
                                value={tag}
                                className={`text-center scrollbar-hide rounded-lg ${
                                  darkMode ? "bg-black" : "bg-white"
                                }`}
                              >
                                {tag}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                    </td>
                    <td className="p-4 rounded-r-lg">
                      {(selectedTags[rowIndex] || []).map((tag) => (
                        <span
                          key={tag}
                          className="inline-block bg-blue-600 text-gray-100 rounded-lg px-2 py-1 mr-2"
                        >
                          {tag}
                          <button
                            className="ml-1 text-gray-400 font-bold"
                            onClick={() => handleRemoveTag(tag, rowIndex)}
                          >
                            &times;
                          </button>
                        </span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CsvDataTable;
