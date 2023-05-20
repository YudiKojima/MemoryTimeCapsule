'use client'
import { api } from '@/lib/api'
import { Camera } from 'lucide-react'
import { FormEvent } from 'react'
import Cookie from 'js-cookie'
import MediaPicker from './MediaPicker'
import { useRouter } from 'next/navigation'

function NewMemoryForm() {
  const router = useRouter()

  async function handleCreateMemory(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const fileToUpload = formData.get('coverUrl')

    let coverUrl = ''

    if (fileToUpload) {
      const uploadFormData = new FormData()
      uploadFormData.set('file', fileToUpload)

      const uploadResponse = await api.post('/upload', uploadFormData)

      coverUrl = uploadResponse.data.fileUrl
    }

    const token = Cookie.get('token')

    await api.post(
      '/memories',
      {
        coverUrl,
        content: formData.get('content'),
        isPublic: formData.get('isPublic'),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    router.push('/')
  }

  return (
    <form onSubmit={handleCreateMemory} className="flex flex-1 flex-col gap-2">
      <div className="flex items-center gap-4">
        <label
          htmlFor="media"
          className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <Camera className="h-4 w-4" />
          Attach media
        </label>

        <label
          htmlFor="isPublic"
          className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <input
            type="checkbox"
            name="isPublic"
            id="isPublic"
            value="true"
            className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500"
          />
          Make public memory
        </label>
      </div>
      {/* preview image */}
      <MediaPicker />

      <textarea
        name="content"
        spellCheck={false}
        className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
        placeholder="Feel free to add photos, videos and stories about that experience you want to remember forever."
      />

      <button
        type="submit"
        className="incline-block self-end rounded-full bg-gradient-to-r from-purple-500 to-orange-300 px-5 py-3 font-alt text-sm uppercase leading-none text-white opacity-90 transition-opacity hover:opacity-100"
      >
        Save
      </button>
    </form>
  )
}

export default NewMemoryForm
