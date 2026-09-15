import { supabase } from '../lib/supabase'

const statusConfig = {
  'Tersedia': { dotColor: 'bg-on-tertiary-container', bg: 'bg-surface-container-highest', textColor: 'text-on-tertiary-container' },
  'Dipinjam': { dotColor: 'bg-secondary', bg: 'bg-secondary-fixed', textColor: 'text-on-secondary-fixed-variant' },
  'Servis Berkala': { dotColor: 'bg-error', bg: 'bg-error-container', textColor: 'text-on-error-container' },
  'Dalam Perawatan': { dotColor: 'bg-error', bg: 'bg-error-container', textColor: 'text-on-error-container' },
  'Afkir / Rusak': { dotColor: 'bg-outline', bg: 'bg-surface-container', textColor: 'text-on-surface' },
}

const mapRowToAsset = (row) => ({
  id: row.id,
  code: row.code,
  name: row.name,
  brand: row.brand || '',
  category: row.category || '',
  serial: row.serial || '',
  location: row.location || '',
  subLocation: row.sub_location || '',
  value: row.value || '',
  date: row.date || '',
  status: {
    label: row.status,
    ...(statusConfig[row.status] || statusConfig['Tersedia']),
  },
  image: row.image,
  icon: row.icon,
  iconBg: row.icon_bg,
})

export async function fetchAssets() {
  const { data, error } = await supabase
    .from('assets')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return (data || []).map(mapRowToAsset)
}

export async function fetchAssetByCode(code) {
  const { data, error } = await supabase
    .from('assets')
    .select('*')
    .eq('code', code)
    .single()

  if (error) throw error
  if (!data) return null
  return mapRowToAsset(data)
}

export async function createAsset(asset) {
  const payload = {
    code: asset.code,
    name: asset.name,
    brand: asset.brand,
    category: asset.category,
    serial: asset.serial,
    location: asset.location,
    sub_location: asset.subLocation,
    value: asset.value,
    date: asset.date,
    status: asset.status?.label || 'Tersedia',
    image: asset.image,
    icon: asset.icon,
    icon_bg: asset.iconBg,
  }

  const { data, error } = await supabase
    .from('assets')
    .insert([payload])
    .select()
    .single()

  if (error) throw error
  return mapRowToAsset(data)
}

export async function updateAsset(id, asset) {
  const payload = {
    code: asset.code,
    name: asset.name,
    brand: asset.brand,
    category: asset.category,
    serial: asset.serial,
    location: asset.location,
    sub_location: asset.subLocation,
    value: asset.value,
    date: asset.date,
    status: asset.status?.label || 'Tersedia',
    image: asset.image,
    icon: asset.icon,
    icon_bg: asset.iconBg,
  }

  const { data, error } = await supabase
    .from('assets')
    .update(payload)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return mapRowToAsset(data)
}

export async function deleteAsset(id) {
  const { error } = await supabase
    .from('assets')
    .delete()
    .eq('id', id)

  if (error) throw error
}