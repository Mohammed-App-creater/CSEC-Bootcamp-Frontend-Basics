import { useState } from "react";
import useCompanyAuthStore from "./Store/CompanyAuthStore.js";

const socialIcons = {
  LinkedIn: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  Twitter: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
  Instagram: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
};

export default function CompanyProfile() {
  const { logoUpload } = useCompanyAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [profile, setProfile] = useState({
    companyName: "Tech Solutions Ltd.",
    companyEmail: "techsolutionsltb@gmail.com",
    industry: "Software Development",
    location: "Addis Ababa, Ethiopia",
    contactPerson: "John Doe",
    contactEmail: "contact@techsolutions.com",
    password: "",
    shortDescription: "Innovative software solutions provider.",
    longDescription: "We provide cutting-edge software solutions tailored to our clients' needs, specializing in custom development, cloud services, and AI integrations.",
    logo: "",
    socialLinks: []
  });
  
  const [newSocialLink, setNewSocialLink] = useState({ type: "", url: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogoChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const uploaded = await logoUpload(file);
      if (uploaded && uploaded.imageUrl) {
        setProfile((prev) => ({ ...prev, logo: uploaded.imageUrl }));
      } else {
        const reader = new FileReader();
        reader.onloadend = () => setProfile((prev) => ({ ...prev, logo: reader.result }));
        reader.readAsDataURL(file);
      }
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };
  

  const addSocialLink = () => {
    if (newSocialLink.type && newSocialLink.url) {
      setProfile((prev) => ({
        ...prev,
        socialLinks: [...prev.socialLinks, newSocialLink],
      }));
      setNewSocialLink({ type: "", url: "" });
    }
  };

  const handleSave = () => {
    if (!profile.companyName || !profile.contactEmail.includes("@")) {
      alert("Please provide a valid company name and email.");
      return;
    }
    setIsEditing(false);
    setSuccessMessage("Profile updated successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <section className="max-w-screen min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-200 to-indigo-300 p-6">
      <div className="w-full max-w-3xl bg-white p-8 rounded-3xl shadow-2xl space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-indigo-700">Company Profile</h1>
          <button onClick={isEditing ? handleSave : () => setIsEditing(true)}
            className={`py-2 px-6 rounded-lg text-white ${isEditing ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'}`}>
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>

        {successMessage && <p className="text-green-600 text-center">{successMessage}</p>}

        <div className="space-y-6">
          <label className="block font-semibold">Company Logo</label>
          <div className="flex items-center space-x-6">
            {profile.logo ? (
              <img src={profile.logo} alt="Company Logo" className="w-28 h-28 rounded-full object-center ring-offset-1 ring-offset-indigo-500 " />
            ) : (
              <div className="w-28 h-28 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 border-4 border-indigo-500">Logo</div>
            )}
            {isEditing && <input type="file" accept="image/*" onChange={handleLogoChange} className="text-sm" />}
          </div>

          <label className="block font-semibold">Company Name</label>
          <input type="text" name="companyName" value={profile.companyName} onChange={handleChange} disabled={!isEditing} className="w-full p-4 border border-[#0034D1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0034D1] " />

          <label className="block font-semibold">Company Email</label>
          <input type="text" name="companyEmail" value={profile.companyEmail} onChange={handleChange} disabled={!isEditing} className="w-full p-4 border border-[#0034D1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0034D1] " />
          
          <label className="block font-semibold">Short Description</label>
          <input type="text" name="shortDescription" value={profile.shortDescription} onChange={handleChange} disabled={!isEditing} className="w-full p-4 border border-[#0034D1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0034D1] " />
          
          <label className="block font-semibold">Industry</label>
          <input type="text" name="industry" value={profile.industry} onChange={handleChange} disabled={!isEditing} className="w-full p-4 border border-[#0034D1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0034D1] " />
          
          <label className="block font-semibold">Location</label>
          <input type="text" name="location" value={profile.location} onChange={handleChange} disabled={!isEditing} className="w-full p-4 border border-[#0034D1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0034D1] " />
          
          <label className="block font-semibold">Contact Person</label>
          <input type="text" name="contactPerson" value={profile.contactPerson} onChange={handleChange} disabled={!isEditing} className="w-full p-4 border border-[#0034D1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0034D1] " />
          
          <label className="block font-semibold">Contact Email</label>
          <input type="email" name="contactEmail" value={profile.contactEmail} onChange={handleChange} disabled={!isEditing} className="w-full p-4 border border-[#0034D1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0034D1] " />
          
          <label className="block font-semibold">Long Description</label>
          <textarea name="longDescription" value={profile.longDescription} onChange={handleChange} disabled={!isEditing} rows="5" className="w-full p-4 border border-[#0034D1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0034D1] "></textarea>
          
          <label className="block font-semibold">Social Links</label>
          {isEditing && ( <section className="flex items-center space-x-4">
            <select name="type" value={newSocialLink.type} onChange={(e) => setNewSocialLink({ ...newSocialLink, type: e.target.value })} className="p-2 border border-[#0034D1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0034D1] ">
              <option value="">Select</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Twitter">Twitter</option>
              <option value="Instagram">Instagram</option>
            </select>
            <input type="text" name="url" value={newSocialLink.url} onChange={(e) => setNewSocialLink({ ...newSocialLink, url: e.target.value })} placeholder="URL" className="p-2 border border-[#0034D1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0034D1] " />
            <button onClick={addSocialLink} className="py-2 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">Add</button>
          </section>)}  
          {profile.socialLinks.map((link, index) => (
            <div key={index} className="flex items-center space-x-2">
              <img src={socialIcons[link.type]} alt={link.type} className="w-6 h-6" />
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{link.url}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
