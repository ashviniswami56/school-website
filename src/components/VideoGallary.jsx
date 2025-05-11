// components/VideoGallery.js
'use client'

import { useState } from 'react'
import Modal from 'react-modal'
import Image from 'next/image'

Modal.setAppElement('body')

const videos = [
  {
    id: 1,
    category: 'Chairman Message',
    thumbnail: '/videos/video1.png',
    youtubeUrl: 'https://youtu.be/-vK9ylnK13M'
  },
  {
    id: 2,
    category: 'Chairman Message',
    thumbnail: '/videos/video2.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/VIDEO_ID_2'
  },
  {
    id: 3,
    category: 'Chairman Message',
    thumbnail: '/videos/video3.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/VIDEO_ID_3'
  },
   {
    id: 4,
    category: 'Miscellaneous',
    thumbnail: '/videos/video4.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/VIDEO_ID_4'
  },
   {
    id: 5,
    category: 'Chairman Message',
    thumbnail: '/videos/video5.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/VIDEO_ID_5'
  },
   {
    id: 6,
    category: 'Chairman Message',
    thumbnail: '/videos/video6.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/VIDEO_ID_6'
  },
   {
    id: 7,
    category: 'Activities',
    thumbnail: '/videos/video7.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/VIDEO_ID_7'
  },
   {
    id: 8,
    category: 'Sports',
    thumbnail: '/videos/video8.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/VIDEO_ID_8'
  },
   {
    id: 9,
    category: 'Sports',
    thumbnail: '/videos/video9.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/VIDEO_ID_9'
  }
]

const categories = ['All', 'Chairman Message', 'Sports', 'Activities', 'Virtual Tour', 'Miscellaneous']

export default function VideoGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState(null)

  const openModal = (url) => {
    setCurrentVideo(url)
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    setCurrentVideo(null)
  }

  const filtered = selectedCategory === 'All'
    ? videos
    : videos.filter(v => v.category === selectedCategory)

  return (
  <div className="bg-white px-6 py-10 text-left px-4 md:px-10">
    <h2 className="text-orange-400 text-lg font-bold uppercase tracking-wide mb-2 px-4 md:px-10 md:text-3xl">
  VIDEO GALLARY _________
</h2>
<h1 className="text-3xl md:text-6xl font-extrabold mb-8 text-black px-4 md:px-10">
  Our Video Gallary
</h1>

<div className="flex flex-wrap justify-start gap-4 mb-10 px-4 md:px-10 text-lg">
  {categories.map(cat => (
    <button
      key={cat}
      onClick={() => setSelectedCategory(cat)}
      className={`px-6 py-2 mx-1 rounded-full font-semibold border transition-all ${
        selectedCategory === cat
          ? 'bg-[#EA4C56] text-white'
          : 'border-[#EA4C56] text-black hover:bg-pink-100'
      }`}
    >
      {cat}
    </button>
  ))}
</div>


    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 md:px-10">
      {filtered.map(video => (
        <div
          key={video.id}
          onClick={() => openModal(video.youtubeUrl)}
          className="relative rounded-xl overflow-hidden cursor-pointer group shadow-md"
        >
          <Image
            src={video.thumbnail}
            alt="Video thumbnail"
            width={400}
            height={230}
            className="w-full h-auto object-cover group-hover:opacity-90"
          />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-110 animate-pulse">
    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-md animate-bounce transition duration-300 hover:scale-110">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-red-600 ml-1"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  </div>
</div>

        </div>
      ))}
    </div>

    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="max-w-3xl w-full bg-white p-0 rounded-lg overflow-hidden shadow-xl mx-auto my-10"
      overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
    >
      {currentVideo && (
        <iframe
          width="100%"
          height="400"
          src={currentVideo}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube video"
        />
      )}
    </Modal>
  </div>
)
}
