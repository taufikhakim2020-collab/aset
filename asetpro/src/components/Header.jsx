function Header() {
  return (
    <header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.03)] z-40 flex items-center justify-between px-space-lg">
      <div className="flex items-center gap-space-sm w-full max-w-lg">
        <div className="relative w-full flex items-center">
          <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[20px]">search</span>
          <input
            className="w-full h-10 pl-10 pr-4 bg-surface-container-low text-on-surface placeholder:text-on-surface-variant rounded-lg font-body-sm text-body-sm outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/20 transition-all"
            placeholder="Cari aset, serial number, atau nama peminjam... [Ctrl+K]"
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-space-md">
        <button className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors" title="Bantuan" type="button">
          <span className="material-symbols-outlined text-[22px]">help_outline</span>
        </button>
        <button className="relative p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors" title="Notifikasi" type="button">
          <span className="material-symbols-outlined text-[22px]">notifications</span>
          <span className="absolute top-1.5 right-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-error px-1 font-label-sm text-[10px] text-on-error">3</span>
        </button>
        <div className="h-6 w-px bg-outline-variant/40"></div>
        <div className="flex items-center gap-space-sm pl-space-xs">
          <div className="text-right hidden sm:block">
            <div className="font-label-md text-label-md text-on-surface font-semibold leading-tight">Siti Nurhaliza</div>
            <div className="font-body-sm text-body-sm text-on-surface-variant leading-tight">IT Asset Manager</div>
          </div>
          <img
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover ring-2 ring-surface-container-high"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZF4PnkDELIVbLL2zTjdLo4S7DbxfXVgEaXqnAtgmFeIifkOkP4yeh07spP81jBRV0dK-aWkDatUWLGRitPoUxGly4hX2WTr6pjvmLPONmmu1O_XRow7Vh1UhIfTKM-_RPj0nHEku3qCAun50dpmENIpf-CH3lNngdcjkKbXd91xm0JWytNcP_gOjAs6Oh4cucQXtBE-sGPWlEakO02FC-wE6bzYPIvQ5yYrD_QfPxoZ5L1f5ZO-Fq"
          />
        </div>
      </div>
    </header>
  )
}

export default Header