function WarehouseStaff() {
  const staff = [
    { initials: 'SN', bg: 'bg-primary-container', textColor: 'text-on-primary' },
    { initials: 'AP', bg: 'bg-secondary', textColor: 'text-on-secondary' },
    { initials: 'RK', bg: 'bg-tertiary-container', textColor: 'text-tertiary-fixed' },
    { initials: 'FH', bg: 'bg-surface-container-highest', textColor: 'text-on-surface' },
  ]

  return (
    <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-md">
      <div className="flex items-center gap-space-md">
        <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary">
          <span className="material-symbols-outlined text-[26px]">badge</span>
        </div>
        <div className="flex flex-col">
          <h3 className="font-label-lg text-label-lg text-on-surface font-semibold">Petugas Inventaris Gudang Shift Hari Ini</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">4 Administrator bertugas melakukan pencatatan keluar-masuk barang & serah terima kunci aset.</p>
        </div>
      </div>
      <div className="flex items-center gap-space-sm">
        <div className="flex -space-x-2 overflow-hidden">
          {staff.map((person, index) => (
            <div
              key={index}
              className={`inline-block h-8 w-8 rounded-full ring-2 ring-surface-container-lowest flex items-center justify-center font-label-sm text-label-sm ${person.bg} ${person.textColor}`}
            >
              {person.initials}
            </div>
          ))}
        </div>
        <button className="h-8 px-3 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" type="button">
          Log Serah Terima
        </button>
      </div>
    </div>
  )
}

export default WarehouseStaff