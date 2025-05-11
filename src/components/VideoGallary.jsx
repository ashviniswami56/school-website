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
    youtubeUrl: 'https://www.youtube.com/embed/QBPMZQL4N1Q'
  },
  {
    id: 2,
    category: 'Chairman Message',
    thumbnail: '/videos/video2.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/QBPMZQL4N1Q'
  },
  {
    id: 3,
    category: 'Chairman Message',
    thumbnail: '/videos/video3.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/QBPMZQL4N1Q'
  },
   {
    id: 4,
    category: 'Miscellaneous',
    thumbnail: '/videos/video4.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/QBPMZQL4N1Q'
  },
   {
    id: 5,
    category: 'Chairman Message',
    thumbnail: '/videos/video5.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/QBPMZQL4N1Q'
  },
   {
    id: 6,
    category: 'Chairman Message',
    thumbnail: '/videos/video6.jpg',
   youtubeUrl: 'https://www.youtube.com/embed/QBPMZQL4N1Q'
  },
   {
    id: 7,
    category: 'Activities',
    thumbnail: '/videos/video7.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/QBPMZQL4N1Q'
  },
   {
    id: 8,
    category: 'Sports',
    thumbnail: '/videos/video8.jpg',
   youtubeUrl: 'https://www.youtube.com/embed/QBPMZQL4N1Q'
  },
   {
    id: 9,
    category: 'Sports',
    thumbnail: '/videos/video9.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/QBPMZQL4N1Q'
  }
]

const categories = ['All', 'Chairman Message', 'Sports', 'Activities', 'Virtual Tour', 'Miscellaneous']

export default function VideoGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState(null)

 const openModal = (url) => {
  console.log("Opening video modal for:", url)
  setCurrentVideo(`${url}?autoplay=1`)
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
  className="relative max-w-3xl w-full bg-white p-0 rounded-lg overflow-hidden shadow-xl mx-auto my-10 z-[9999]"
  overlayClassName="fixed inset-0 flex items-center justify-center bg-transparent z-[9999]"
>
  <button
    onClick={closeModal}
    className="absolute top-2 right-2 text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 z-50"
  >
    ✕
  </button>

  {currentVideo && (
    <iframe
      width="100%"
      height="400"
      src={`${currentVideo}?autoplay=1`}
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
