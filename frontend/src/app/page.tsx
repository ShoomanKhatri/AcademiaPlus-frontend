import FAQ from "@/components/FAQ";
import FeatureCards from "@/components/FeatureCards";
import HeroSection from "@/components/HeroSection";
import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  // Sample data for the ProfileCard component
  const profileData = {
    name: 'John Doe',
    role: 'Student',
    profileImage: 'https://example.com/profile-image.jpg',
  };

  return (
    <>
      <HeroSection />
      <FeatureCards />
      <ProfileCard 
        name={profileData.name} 
        role={profileData.role} 
        profileImage={profileData.profileImage} 
      />
      <FAQ />
    </>
  );
}
