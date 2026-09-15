import Sidebar from './Sidebar'
import Header from './Header'
import KPICards from './KPICards'
import HeroBanner from './HeroBanner'
import DistributionChart from './DistributionChart'
import ActivityTable from './ActivityTable'
import UrgentAlerts from './UrgentAlerts'
import ValuationCategories from './ValuationCategories'
import QuickLookup from './QuickLookup'
import WarehouseStaff from './WarehouseStaff'

function Dashboard() {
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased">
      <Sidebar />
      <div className="pl-72">
        <Header />
        <main className="w-full pt-16 bg-surface px-space-lg py-space-lg min-h-screen">
          <div className="flex flex-col w-full gap-space-lg">
            <ModuleHeader />
            <KPICards />
            <HeroBanner />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
              <div className="lg:col-span-8 flex flex-col gap-space-lg">
                <DistributionChart />
                <ActivityTable />
              </div>
              <div className="lg:col-span-4 flex flex-col gap-space-lg">
                <UrgentAlerts />
                <ValuationCategories />
                <QuickLookup />
              </div>
            </div>
            <WarehouseStaff />
          </div>
        </main>
      </div>
    </div>
  )
}

function ModuleHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
      <div className="flex flex-col">
        <div className="flex items-center gap-space-xs">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">Sistem Kendali Operasional</span>
          <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
          <span className="font-label-sm text-label-sm text-on-surface-variant font-data-mono">Q2 · 2025 AKTIF</span>
        </div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">Dashboard Manajemen Aset</h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">Ringkasan metrik kesehatan aset, distribusi status, dan aktivitas sirkulasi terkini PT Nusantara Solusi.</p>
      </div>
      <div className="flex items-center gap-space-sm self-start md:self-auto">
        <button className="h-10 px-space-md rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container transition-colors flex items-center gap-space-xs" type="button">
          <span className="material-symbols-outlined text-[18px] text-on-surface-variant">file_download</span>
          <span>Ekspor PDF / Excel</span>
        </button>
        <button className="h-10 px-space-md rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm hover:bg-surface-container-highest hover:text-on-surface transition-all flex items-center gap-space-xs" type="button">
          <span className="material-symbols-outlined text-[18px]">add_box</span>
          <span>+ Catat Aset Baru</span>
        </button>
      </div>
    </div>
  )
}

export default Dashboard