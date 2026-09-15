import { Link, useLocation } from 'react-router-dom'

function Sidebar() {
  const location = useLocation()

  const menuItems = [
    { path: '/', icon: 'grid_view', label: 'Dashboard' },
    { path: '/katalog-aset', icon: 'inventory_2', label: 'Katalog Aset', badge: '1,428', badgeClass: 'bg-surface-container-high text-on-surface' },
    { path: '#', icon: 'sync_alt', label: 'Sirkulasi & Pinjam', badge: '32 Aktif', badgeClass: 'bg-surface-container-highest text-secondary font-medium' },
    { path: '#', icon: 'build', label: 'Jadwal & Perawatan', badge: '8 Butuh Servis', badgeClass: 'bg-error-container text-on-error-container font-medium' },
    { path: '#', icon: 'analytics', label: 'Laporan & Ekspor' },
    { path: '#', icon: 'settings', label: 'Pengaturan' },
  ]

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between select-none">
      <div className="flex flex-col">
        <div className="h-16 px-space-md flex items-center gap-space-sm bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.02)]">
          <img alt="AsetPro Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1WWCK1u6DO4tPP3rtCa34xASvNjhOrY8jFXJoMGABS4QSJ52Ersu79XAGrBF6w1L_Na6bxh4RFwzBXNpbUwom0woyRecItM8Lv08ZVdr6h2NxF0UGsdi6h51IfT_BiTbbgan4vSbdk7WcqJ6neTdykDXpmOnrEZHsrnwYjEkUr2Omc3lzk9TZVjZpiu_a8sjvyv32oofSWcgKeAwZYA4QEyCDeq8sW0o2fMaFRWEaacPWzxikEpUJ-Ng9M"/>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-none">AsetPro</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-medium mt-space-xs">Enterprise Asset OS</span>
          </div>
        </div>
        <div className="px-space-md pt-space-md">
          <p className="font-label-sm text-label-sm text-on-surface-variant px-space-xs mb-space-xs uppercase tracking-wider font-semibold">Menu Operasional</p>
          <nav className="space-y-space-xs">
            {menuItems.map((item) => {
              const active = isActive(item.path)
              return (
                <Link
                  key={item.path}
                  className={`flex items-center justify-between px-space-sm py-2.5 rounded-lg transition-colors group ${
                    active
                      ? 'bg-primary-container text-on-primary font-semibold'
                      : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                  }`}
                  to={item.path}
                >
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                    <span className="font-body-md text-body-md">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`font-label-sm text-label-sm px-space-xs py-0.5 rounded-full ${item.badgeClass}`}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
      <div className="p-space-md space-y-space-sm">
        <button className="w-full flex items-center justify-center gap-space-xs h-10 px-space-md bg-secondary text-on-secondary rounded-lg font-label-md text-label-md hover:bg-secondary-container transition-colors shadow-sm" type="button">
          <span className="material-symbols-outlined text-[18px]">qr_code_scanner</span>
          <span>Quick Scan QR / Barcode</span>
        </button>
        <div className="p-space-sm rounded-lg bg-surface-container-lowest flex items-start gap-space-sm shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
          <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">verified_user</span>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="font-label-sm text-label-sm text-on-surface truncate font-semibold">Admin Utama</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant truncate">PT Nusantara Solusi</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar