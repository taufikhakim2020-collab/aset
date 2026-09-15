function ActivityTable() {
  const activities = [
    {
      icon: 'laptop_mac',
      iconBg: 'bg-surface-container-high',
      name: 'MacBook Pro 14" M2 Pro',
      category: 'IT Equipment · Dept Tech',
      code: 'AST-IT-2023-089',
      borrower: 'Andi Pratama',
      division: 'Divisi Product & UX',
      dueDate: '18 Mei 2025',
      status: {
        label: 'Dipinjam',
        dotColor: 'bg-secondary',
        bg: 'bg-surface-container-highest',
        textColor: 'text-secondary',
      },
      action: { label: 'Check-In', variant: 'default' },
    },
    {
      icon: 'videocam',
      iconBg: 'bg-surface-container-high',
      name: 'Sony FX3 Cinema Camera',
      category: 'Multimedia · Studio Production',
      code: 'AST-MM-2024-012',
      borrower: 'Rina Kusuma',
      division: 'Brand Marketing',
      dueDate: '12 Mei 2025',
      status: {
        label: 'Terlambat 2H',
        dotColor: 'bg-error',
        bg: 'bg-error-container',
        textColor: 'text-on-error-container',
      },
      action: { label: 'Kirim Notif', variant: 'error' },
    },
    {
      icon: 'two_wheeler',
      iconBg: 'bg-surface-container-high',
      name: 'Honda Vario 160cc CBS',
      category: 'Kendaraan Operasional Lapangan',
      code: 'AST-VH-2022-004',
      borrower: 'Fajar Hidayat',
      division: 'General Affairs & Kurir',
      dueDate: '14 Mei 2025',
      status: {
        label: 'Selesai / Aman',
        dotColor: 'bg-on-tertiary-container',
        bg: 'bg-surface-container-high',
        textColor: 'text-on-tertiary-container',
      },
      action: { label: 'Detail', variant: 'default' },
    },
    {
      icon: 'co_present',
      iconBg: 'bg-surface-container-high',
      name: 'Proyektor Epson EB-X51',
      category: 'Facility Asset · R. Rapat B-02',
      code: 'AST-FC-2021-118',
      borrower: 'Dewi Lestari',
      division: 'HR & People Ops',
      dueDate: '15 Mei 2025',
      status: {
        label: 'Dipinjam',
        dotColor: 'bg-secondary',
        bg: 'bg-surface-container-highest',
        textColor: 'text-secondary',
      },
      action: { label: 'Check-In', variant: 'default' },
    },
    {
      icon: 'laptop_windows',
      iconBg: 'bg-surface-container-high',
      name: 'Dell XPS 15 9520 OLED',
      category: 'IT Equipment · Dept Finance',
      code: 'AST-IT-2024-203',
      borrower: 'Bambang Susilo',
      division: 'Accounting Staff',
      dueDate: '22 Mei 2025',
      status: {
        label: 'Dipinjam',
        dotColor: 'bg-secondary',
        bg: 'bg-surface-container-highest',
        textColor: 'text-secondary',
      },
      action: { label: 'Check-In', variant: 'default' },
    },
  ]

  return (
    <div className="rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden flex flex-col">
      <div className="p-6 pb-4 flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className="font-headline-sm text-headline-sm text-on-surface">Aktivitas Peminjaman & Pengembalian Terkini</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Pantauan sirkulasi aset operasional real-time</p>
        </div>
        <a className="font-label-md text-label-md text-secondary hover:underline flex items-center gap-1" href="#">
          <span>Lihat Semua Sirkulasi</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low text-on-surface-variant font-label-md text-label-md">
              <th className="py-3 px-6 font-semibold">Nama Aset & Kategori</th>
              <th className="py-3 px-4 font-semibold">Kode Aset / QR</th>
              <th className="py-3 px-4 font-semibold">Peminjam & Divisi</th>
              <th className="py-3 px-4 font-semibold">Tenggat Kembali</th>
              <th className="py-3 px-4 font-semibold">Status</th>
              <th className="py-3 px-6 font-semibold text-right">Aksi Cepat</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container font-body-sm text-body-sm">
            {activities.map((activity, index) => (
              <tr key={index} className="hover:bg-surface transition-colors">
                <td className="py-3.5 px-6">
                  <div className="flex items-center gap-space-sm">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-on-surface flex-shrink-0 ${activity.iconBg}`}>
                      <span className="material-symbols-outlined text-[18px]">{activity.icon}</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-label-md text-label-md text-on-surface font-semibold truncate">{activity.name}</span>
                      <span className="text-on-surface-variant text-[11px]">{activity.category}</span>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 px-4 font-data-mono text-on-surface font-medium">{activity.code}</td>
                <td className="py-3.5 px-4">
                  <div className="flex flex-col">
                    <span className="text-on-surface font-medium">{activity.borrower}</span>
                    <span className="text-on-surface-variant text-[11px]">{activity.division}</span>
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  <span className="font-data-mono text-on-surface">{activity.dueDate}</span>
                </td>
                <td className="py-3.5 px-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full ${activity.status.bg} ${activity.status.textColor} font-label-sm text-label-sm font-semibold`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${activity.status.dotColor}`}></span> {activity.status.label}
                  </span>
                </td>
                <td className="py-3.5 px-6 text-right">
                  <button
                    className={`px-2.5 py-1 rounded font-label-sm text-label-sm transition-colors ${
                      activity.action.variant === 'error'
                        ? 'bg-error text-on-error hover:opacity-90 transition-opacity'
                        : 'bg-surface-container hover:bg-surface-container-high text-on-surface'
                    }`}
                    type="button"
                  >
                    {activity.action.label}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ActivityTable