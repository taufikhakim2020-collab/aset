function HeroBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-primary-container text-on-primary p-space-lg shadow-md flex flex-col lg:flex-row items-center justify-between gap-space-lg">
      <div className="flex flex-col max-w-xl z-10">
        <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider font-semibold">Audit Fisik Semester I</span>
        <h2 className="font-headline-md text-headline-md text-on-primary mt-1 font-bold">Sinkronisasi Logistik & Verifikasi Gudang Jakarta Pusat</h2>
        <p className="font-body-md text-body-md text-primary-fixed-dim mt-2 leading-relaxed">
          Jadwal verifikasi barcode RFID berkala untuk 420 perangkat laptop dan server jaringan dimulai dalam 3 hari kerja. Pastikan seluruh PIC divisi telah memvalidasi pemegang unit.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-space-sm">
          <button className="h-9 px-space-md rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary-container transition-colors" type="button">
            Buka Lembar Audit
          </button>
          <span className="font-data-mono text-body-sm text-primary-fixed-dim flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">schedule</span> 14 - 20 Mei 2025
          </span>
        </div>
      </div>
      <div className="w-full lg:w-96 h-48 rounded-xl overflow-hidden relative shadow-inner z-10 flex-shrink-0">
        <img
          className="w-full h-full object-cover"
          data-alt="High-tech enterprise warehouse in Jakarta with neatly arranged computer servers, barcode scanners, labeled equipment boxes, and modern clean logistics environment illuminated by cool blue and soft white LED lights."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRmSKDtti9os0mBFhLPmcF-Y1UpZnr5Y4FavteojDeHJA7g2qfd39ktzQCo3l8StFMlWxwHoBGLhS6Y0rEojxW6dPoxYoduXqsw9n19rIbSWBEjsOlbQ5nec-5BNsilkYvgUY2IXqGBqE-ZHgilqDTEWs7225N4uSNe4EQ33YWI-F8HoQkohXfD5lAGxxDkSJWF7ULW-0W44XDDD4t42T4v14u8bFGW-CE883Q9V6CKZXIoth0YPgv"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent"></div>
        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-on-primary text-label-sm font-label-sm">
          <span className="bg-surface-container-lowest/20 backdrop-blur-md px-2 py-0.5 rounded">Gudang Utama A-04</span>
          <span className="bg-secondary px-2 py-0.5 rounded text-on-secondary font-semibold">88% Terverifikasi</span>
        </div>
      </div>
      <div className="absolute -bottom-24 -right-12 w-80 h-80 rounded-full bg-secondary/15 blur-3xl pointer-events-none"></div>
    </div>
  )
}

export default HeroBanner