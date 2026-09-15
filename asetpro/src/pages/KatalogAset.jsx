import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import KatalogKPICards from './KatalogKPICards'
import FilterTabs from './FilterTabs'
import AssetTable from './AssetTable'
import AssetPreview from './AssetPreview'
import AddAssetModal from './AddAssetModal'

const initialAssets = [
  {
    id: 'AST-NB-0428',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxDOcsjfe7ivE_HcoxncXIDcuzdYyNpPW2eaU2vvyQS3HIh2mU6GM_yJXy247dpgamtf4DC72D7UmW-l-EPjZvNjVrpqpEutZM_AuNMm-8btOBGqI6WWkEfApHxng-DEhDZhGy8HT7KeVve_LxSYVhPwVhtxwyJBTh7YLo-88NdPBM0VDospTu60GD-6O3SUlnfLdDV_jRf4ylge-RZ2MRnTEaGgUYGHwMVXK7YlXVRXG9RS8QisVx',
    name: 'MacBook Pro 14" M3 Pro',
    brand: 'Apple',
    category: 'IT Hardware',
    code: 'AST-NB-0428',
    serial: 'C02GJ827MD6T',
    location: 'HQ Jakarta',
    subLocation: 'Lt. 4 Engineering',
    value: 'Rp 29.500.000',
    date: '14 Mar 2024',
    status: { label: 'Tersedia', dotColor: 'bg-on-tertiary-container', bg: 'bg-surface-container-highest', textColor: 'text-on-tertiary-container' },
  },
  {
    id: 'AST-NB-0391',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMsq_HlIkxZCr6wcUBGg_WQVbp1W1EGTWCppPThgU4jSPsvKGTrzFW2XiJ6Y4ZBaC-if8GTDR1tpIbI0ngjBK_eFyWShYI8sPGP7Px_YkYRlTVRh3Q0OF5SjljPb0_M9ExLCApDgJhkdlrOkwh_sgfv1dT3nasBANLZy55BO_1ByuX-hpoaGYpolKugeECPkc4tqBhi5QyXD9XMx5X46lNueTg-WgJKzjYIqp1lLJCIX4iIJ-rsO39',
    name: 'ThinkPad P16s Gen 2',
    brand: 'Lenovo',
    category: 'IT Hardware',
    code: 'AST-NB-0391',
    serial: 'PF4D92LX8801',
    location: 'HQ Jakarta',
    subLocation: 'Lt. 3 Data Analytics',
    value: 'Rp 23.400.000',
    date: '18 Jan 2024',
    status: { label: 'Dipinjam', dotColor: 'bg-secondary', bg: 'bg-secondary-fixed', textColor: 'text-on-secondary-fixed-variant' },
  },
  {
    id: 'AST-NET-0112',
    image: null,
    icon: 'router',
    iconBg: 'bg-surface-container-high',
    name: 'Cisco Catalyst 2960-X',
    brand: 'Cisco',
    category: 'Perangkat Jaringan',
    code: 'AST-NET-0112',
    serial: 'FCW2219B0QZ',
    location: 'Sentra Data BSD',
    subLocation: 'Rack Server 02A',
    value: 'Rp 18.250.000',
    date: '11 Nov 2023',
    status: { label: 'Tersedia', dotColor: 'bg-on-tertiary-container', bg: 'bg-surface-container-highest', textColor: 'text-on-tertiary-container' },
  },
  {
    id: 'AST-VH-0024',
    image: null,
    icon: 'directions_car',
    iconBg: 'bg-surface-container-high',
    name: 'Toyota Avanza 1.5 G CVT',
    brand: 'Toyota',
    category: 'Armada Operasional',
    code: 'AST-VH-0024',
    serial: 'B 1842 POL (MHKM)',
    location: 'Pool Slipi',
    subLocation: 'Area Parkir B2',
    value: 'Rp 269.000.000',
    date: '05 Agu 2022',
    status: { label: 'Servis Berkala', dotColor: 'bg-error', bg: 'bg-error-container', textColor: 'text-on-error-container' },
  },
  {
    id: 'AST-CAM-0087',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDX33Fq9lS6P_cObtxjed_SaZ9e1CttVQ12mv-_C9AWq9rAxxrY_ouWgw0SxOUNjkYH83uO6YxOq-6cFuXqB6MInpmS-2cZP-i7YViullKYixex3Wup9GAm2DdBZmjEVc39AO8PpJiO4W55a-WPbZLaswgW6wjiYnFxPTMvd_Of0lUS9xqbiz5fdDvUeHiBzS59PdgGmW-7Tsss5sWrY6fkMtXN0Od6iHSxxE09qKmOw7u8W8ot2M8x',
    name: 'Sony FX3 Cinema Camera',
    brand: 'Sony',
    category: 'Multimedia & Video',
    code: 'AST-CAM-0087',
    serial: 'SN-3910582-JK',
    location: 'HQ Jakarta',
    subLocation: 'Lt. 2 Studio Utama',
    value: 'Rp 58.900.000',
    date: '02 Des 2023',
    status: { label: 'Dipinjam', dotColor: 'bg-secondary', bg: 'bg-secondary-fixed', textColor: 'text-on-secondary-fixed-variant' },
  },
  {
    id: 'AST-FUR-0519',
    image: null,
    icon: 'table_restaurant',
    iconBg: 'bg-surface-container-high',
    name: 'Steelcase Migration Desk',
    brand: 'Steelcase',
    category: 'Furnitur Kantor',
    code: 'AST-FUR-0519',
    serial: 'SC-MIG-2022-81',
    location: 'HQ Jakarta',
    subLocation: 'Lt. 3 Co-working',
    value: 'Rp 14.800.000',
    date: '19 Jun 2022',
    status: { label: 'Tersedia', dotColor: 'bg-on-tertiary-container', bg: 'bg-surface-container-highest', textColor: 'text-on-tertiary-container' },
  },
  {
    id: 'AST-LOG-0004',
    image: null,
    icon: 'forklift',
    iconBg: 'bg-surface-container-high',
    name: 'Toyota 8FBN25 Elektrik Forklift',
    brand: 'Toyota Material',
    category: 'Alat Berat Gudang',
    code: 'AST-LOG-0004',
    serial: 'TY-8FBN25-9932',
    location: 'Gudang Cikarang',
    subLocation: 'Zona Muat 01',
    value: 'Rp 340.000.000',
    date: '10 Feb 2021',
    status: { label: 'Tersedia', dotColor: 'bg-on-tertiary-container', bg: 'bg-surface-container-highest', textColor: 'text-on-tertiary-container' },
  },
]

function KatalogAset() {
  const [assets, setAssets] = useState(initialAssets)
  const [selectedAsset, setSelectedAsset] = useState(null)
  const [showAddModal, setShowAddModal] = useState(false)
  const [editingAsset, setEditingAsset] = useState(null)

  const handleAddAsset = (newAsset) => {
    setAssets((prev) => [newAsset, ...prev])
  }

  const handleDeleteAsset = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus aset ini?')) {
      setAssets((prev) => prev.filter((item) => item.id !== id))
      setSelectedAsset(null)
    }
  }

  const handleEditAsset = (updatedAsset) => {
    setAssets((prev) => prev.map((item) => (item.id === updatedAsset.id ? updatedAsset : item)))
    setEditingAsset(null)
    setSelectedAsset(updatedAsset)
  }

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased">
      <Sidebar />
      <div className="pl-72">
        <Header />
        <main className="w-full pt-16 bg-surface px-space-lg py-space-lg min-h-screen">
          <div className="flex flex-col w-full">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mb-space-lg">
              <div className="flex flex-col">
                <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm mb-1 uppercase tracking-wider">
                  <span>Sistem Inventaris</span>
                  <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  <span className="text-secondary font-semibold">Katalog Master</span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Katalog & Inventaris Aset</h1>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">Daftar seluruh inventaris fisik, spesifikasi, penomoran kode QR/barcode, dan status operasional real-time.</p>
              </div>
              <div className="flex flex-wrap items-center gap-space-sm">
                <button className="h-10 px-space-md bg-surface-container-lowest text-on-surface rounded-lg font-label-md text-label-md shadow-sm hover:bg-surface-container-low transition-all flex items-center gap-space-xs" type="button">
                  <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
                  <span>Cetak Label QR Massal</span>
                </button>
                <button className="h-10 px-space-md bg-surface-container-lowest text-on-surface rounded-lg font-label-md text-label-md shadow-sm hover:bg-surface-container-low transition-all flex items-center gap-space-xs" type="button">
                  <span className="material-symbols-outlined text-[18px]">file_upload</span>
                  <span>Impor Excel</span>
                </button>
                <button className="h-10 px-space-md bg-primary-container text-on-primary rounded-lg font-label-md text-label-md shadow-md hover:opacity-95 transition-all flex items-center gap-space-xs" onClick={() => setShowAddModal(true)} type="button">
                  <span className="material-symbols-outlined text-[20px]">add</span>
                  <span>Tambah Aset Baru</span>
                </button>
              </div>
            </div>
            <KatalogKPICards />
            <FilterTabs />
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm mb-space-md flex flex-col lg:flex-row items-center justify-between gap-space-md">
              <div className="flex flex-1 flex-col sm:flex-row items-center gap-space-sm w-full">
                <div className="relative w-full lg:max-w-md">
                  <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-[20px]">search</span>
                  <input
                    className="w-full h-10 pl-10 pr-4 bg-surface-container-low text-on-surface placeholder:text-on-surface-variant rounded-lg font-body-sm text-body-sm outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/20 transition-all"
                    placeholder="Cari nama aset, nomor seri SN, kode inventaris..."
                    type="text"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-space-xs w-full sm:w-auto">
                  <select className="h-10 px-3 bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg outline-none cursor-pointer">
                    <option value="">Kategori: Semua</option>
                    <option>Laptop & Komputer</option>
                    <option>Perangkat Jaringan</option>
                    <option>Kendaraan Operasional</option>
                    <option>Multimedia & Broadcast</option>
                    <option>Furnitur Ergonomis</option>
                    <option>Peralatan Gudang</option>
                  </select>
                  <select className="h-10 px-3 bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg outline-none cursor-pointer">
                    <option value="">Lokasi: Semua Gedung</option>
                    <option>HQ Jakarta - Lt. 4 Engineering</option>
                    <option>HQ Jakarta - Lt. 2 Studio</option>
                    <option>Gudang Logistik Cikarang</option>
                    <option>Pool Armada Slipi</option>
                    <option>Sentra Data BSD</option>
                  </select>
                  <select className="h-10 px-3 bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg outline-none cursor-pointer">
                    <option value="">Status: Semua</option>
                    <option>Aktif & Tersedia</option>
                    <option>Dipinjam</option>
                    <option>Dalam Perawatan</option>
                    <option>Afkir / Rusak</option>
                  </select>
                  <button className="h-10 px-3 text-on-surface-variant hover:text-error hover:bg-surface-container-low rounded-lg font-label-sm text-label-sm transition-colors flex items-center gap-1" title="Reset filter" type="button">
                    <span className="material-symbols-outlined text-[16px]">restart_alt</span>
                    <span>Reset</span>
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-space-xs self-end lg:self-center">
                <div className="flex items-center bg-surface-container-low p-1 rounded-lg">
                  <button className="p-1.5 rounded bg-surface-container-lowest text-on-surface shadow-xs" title="Tampilan Tabel" type="button">
                    <span className="material-symbols-outlined text-[18px]">table_rows</span>
                  </button>
                  <button className="p-1.5 rounded text-on-surface-variant hover:text-on-surface" title="Tampilan Kotak Grid" type="button">
                    <span className="material-symbols-outlined text-[18px]">grid_view</span>
                  </button>
                </div>
                <button className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors" title="Konfigurasi Kolom" type="button">
                  <span className="material-symbols-outlined text-[20px]">view_column</span>
                </button>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row gap-space-lg items-start">
              <AssetTable
                assets={assets}
                onSelectAsset={setSelectedAsset}
                selectedAssetId={selectedAsset?.id}
                onEdit={setEditingAsset}
                onDelete={handleDeleteAsset}
              />
              <AssetPreview asset={selectedAsset} />
            </div>
          </div>
        </main>
      </div>

      {showAddModal && (
        <AddAssetModal
          onClose={() => setShowAddModal(false)}
          onSubmit={handleAddAsset}
        />
      )}

      {editingAsset && (
        <AddAssetModal
          initialData={editingAsset}
          onClose={() => setEditingAsset(null)}
          onSubmit={handleEditAsset}
        />
      )}
    </div>
  )
}

export default KatalogAset