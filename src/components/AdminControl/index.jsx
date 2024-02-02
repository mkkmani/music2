import { AddStudent,AddVideo,AddImageToGallery,AddEventImages } from "../AdminControlForms";

export const AdminControl = () => (
  <div className="mt-16">
    <AddStudent />
    <AddVideo />
    <AddImageToGallery />
    <AddEventImages/>
  </div>
)