
import { DashboardLayout } from "@/components/DashboardLayout"
import { FarmHeroSection } from "@/components/farm-profile/FarmHeroSection"
import { FarmDetailsCard } from "@/components/farm-profile/FarmDetailsCard"
import { ProductionSummary } from "@/components/farm-profile/ProductionSummary"
import { ResourceMap } from "@/components/farm-profile/ResourceMap"
import { TeamOverview } from "@/components/farm-profile/TeamOverview"
import { CertificationBadges } from "@/components/farm-profile/CertificationBadges"
import { FarmStats } from "@/components/farm-profile/FarmStats"
import { ContactInformation } from "@/components/farm-profile/ContactInformation"

export default function FarmProfile() {
  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        <FarmHeroSection />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <FarmDetailsCard />
            <ProductionSummary />
            <ResourceMap />
          </div>
          
          <div className="space-y-6">
            <FarmStats />
            <CertificationBadges />
            <ContactInformation />
          </div>
        </div>
        
        <TeamOverview />
      </div>
    </DashboardLayout>
  )
}
