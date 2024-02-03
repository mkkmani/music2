import { useState } from "react";
import { AdminLoginForm, StudentLoginForm } from "../LoginForms";

const Accounts = () => {
  const [activeTab, setActiveTab] = useState('student');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full mt-16 flex flex-col justify-center items-center">
      <ul className="flex flex-row items-center justify-center">
        <li className={`mx-6 text-lg font-medium text-blue-600 ${activeTab === 'admin' ? 'border-b-2 border-blue-500 pb-2' : ''}`} onClick={() => handleTabChange('admin')}>Admin</li>
        <li className={`mx-6 text-lg font-medium text-blue-600 ${activeTab === 'student' ? 'border-b-2 border-blue-500 pb-2' : ''}`} onClick={() => handleTabChange('student')}>Student</li>
      </ul>
      <div>
        {activeTab === 'admin' ? <AdminLoginForm /> : <StudentLoginForm />}
      </div>
    </div>
  );
};

export default Accounts;
