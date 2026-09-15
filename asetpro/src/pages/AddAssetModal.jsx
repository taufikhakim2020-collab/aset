import { useEffect, useState } from 'react'

const emptyForm = {
  name: '',
  brand: '',
  category: '',
  serial: '',
  code: '',
  location: '',
  subLocation: '',
  value: '',
  date: '',
  status: 'Tersedia',
}

function AddAssetModal({ onClose, onSubmit, initialData, saving }) {
  const isEdit = !!initialData
  const [form, setForm] = useState(() => {
    if (initialData) {
      return {
        name: initialData.name || '',
        brand: initialData.brand || '',
        category: initialData.category || '',
        serial: initialData.serial || '',
        code: initialData.code || '',
        location: initialData.location || '',
        subLocation: initialData.subLocation || '',
        value: typeof initialData.value === 'string' ? initialData.value : '',
        date: typeof initialData.date === 'string' ? initialData.date : '',
        status: initialData.status?.label || 'Tersedia',
      }
    }
    return emptyForm
  })

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const statusConfig = {
      'Tersedia': { dotColor: 'bg-on-tertiary-container', bg: 'bg-surface-container-highest', textColor: 'text-on-tertiary-container' },
      'Dipinjam': { dotColor: 'bg-secondary', bg: 'bg-secondary-fixed', textColor: 'text-on-secondary-fixed-variant' },
      'Dalam Perawatan': { dotColor: 'bg-error', bg: 'bg-error-container', textColor: 'text-on-error-container' },
      'Afkir / Rusak': { dotColor: 'bg-outline', bg: 'bg-surface-container', textColor: 'text-on-surface' },
      'Servis Berkala': { dotColor: 'bg-error', bg: 'bg-error-container', textColor: 'text-on-error-container' },
    }
    await onSubmit({
      ...form,
      id: initialData?.id,
      image: initialData?.image || null,
      icon: initialData?.icon || null,
      iconBg: initialData?.iconBg || 'bg-surface-container-high',
      status: { label: form.status, ...(statusConfig[form.status] || statusConfig['Tersedia']) },
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-surface-container-lowest rounded-xl shadow-lg p-space-lg">
        <div className="flex items-center justify-between mb-space-md">
          <h2 className="font-headline-sm text-headline-sm text-on-surface">{isEdit ? 'Edit Aset' : 'Tambah Aset Baru'}</h2>
          <button className="p-1 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container" onClick={onClose} type="button">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-space-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            <label className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Nama Aset</span>
              <input className="h-10 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-secondary/20" name="name" required value={form.name} onChange={handleChange} />
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Merek</span>
              <input className="h-10 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-secondary/20" name="brand" required value={form.brand} onChange={handleChange} />
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Kategori</span>
              <select className="h-10 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none" name="category" required value={form.category} onChange={handleChange}>
                <option value="">Pilih kategori</option>
                <option>IT Hardware</option>
                <option>Perangkat Jaringan</option>
                <option>Kendaraan Operasional</option>
                <option>Multimedia & Video</option>
                <option>Furnitur Kantor</option>
                <option>Alat Berat Gudang</option>
              </select>
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Kode Aset</span>
              <input className="h-10 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-secondary/20 font-data-mono" name="code" required value={form.code} onChange={handleChange} />
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Nomor Seri</span>
              <input className="h-10 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-secondary/20 font-data-mono" name="serial" required value={form.serial} onChange={handleChange} />
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Nilai Perolehan</span>
              <input className="h-10 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-secondary/20" name="value" required value={form.value} onChange={handleChange} />
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Lokasi Gedung</span>
              <input className="h-10 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-secondary/20" name="location" required value={form.location} onChange={handleChange} />
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Sub Lokasi</span>
              <input className="h-10 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-secondary/20" name="subLocation" value={form.subLocation} onChange={handleChange} />
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Tanggal Perolehan</span>
              <input className="h-10 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-secondary/20" name="date" required type="date" value={form.date} onChange={handleChange} />
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Status</span>
              <select className="h-10 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none" name="status" value={form.status} onChange={handleChange}>
                <option>Tersedia</option>
                <option>Dipinjam</option>
                <option>Dalam Perawatan</option>
                <option>Afkir / Rusak</option>
                <option>Servis Berkala</option>
              </select>
            </label>
          </div>
          <div className="flex items-center justify-end gap-space-sm pt-space-sm border-t border-surface-container-low">
            <button className="h-10 px-space-md rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" onClick={onClose} type="button">
              Batal
            </button>
            <button className="h-10 px-space-md rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:opacity-95 transition-all" type="submit" disabled={saving}>
              {saving ? 'Menyimpan...' : isEdit ? 'Simpan Perubahan' : 'Simpan Aset'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddAssetModal