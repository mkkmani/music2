import { useState } from "react";
import { AddStudent, AddVideo, AddImageToGallery, AddEventImages } from "../AdminControlForms";

export const AdminControl = () => {
  const [activeTab, setActiveTab] = useState('student');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-16 flex flex-col justify-center items-center">
      <ul className="flex flex-row justify-center items-center mb-4">
        <li className={`mx-2 p-2 rounded-lg cursor-pointer font-medium text-blue-500 bg-blue-100 ${activeTab === 'student' ? 'border-b-2 border-blue-500' : ''}`} onClick={() => handleTabChange('student')}>Add student
        </li>
        <li className={`mx-2 p-2 rounded-lg cursor-pointer font-medium text-blue-500 bg-blue-100 ${activeTab === 'video' ? 'border-b-2 border-blue-500' : ''}`} onClick={() => handleTabChange('video')}>Add video
        </li>
        <li className={`mx-2 p-2 rounded-lg cursor-pointer font-medium text-blue-500 bg-blue-100 ${activeTab === 'images' ? 'border-b-2 border-blue-500' : ''}`} onClick={() => handleTabChange('images')}>Add images
        </li>
        <li className={`mx-2 p-2 rounded-lg cursor-pointer font-medium text-blue-500 bg-blue-100 ${activeTab === 'eventImages' ? 'border-b-2 border-blue-500' : ''}`} onClick={() => handleTabChange('eventImages')}>Add Event images
        </li>
      </ul>
      {activeTab === 'student' && <AddStudent />}
      {activeTab === 'video' && <AddVideo />}
      {activeTab === 'images' && <AddImageToGallery />}
      {activeTab === 'eventImages' && <AddEventImages />}
    </div>
  );
};
