export default function Navbar() {
	return (
		<div>
			<nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6'>
				<div className='flex items-center flex-shrink-0 text-white mr-6'>
					<h1 className='text-teal-900 font-bold'>Reef Tracker</h1>
				</div>
				<div className='block lg:hidden'>
					<button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
						<svg
							className='fill-current h-3 w-3'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<title>Menu</title>
							<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
						</svg>
					</button>
				</div>
				<div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
					<div className='text-sm lg:flex-grow'>
						<a
							href='#responsive-header'
							className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-teal-800 mr-4 transition'
						>
							Dashboard
						</a>
						<a
							href='#responsive-header'
							className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-teal-800 mr-4 transition'
						>
							About
						</a>
						<a
							href='#responsive-header'
							className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-teal-800 transition'
						>
							Contact
						</a>
					</div>
					<div>
						<a
							href='#'
							className='inline-block text-sm px-4 py-2 leading-none bg-teal-300 rounded text-white border-white hover:border-transparent hover:text-teal-300 hover:bg-teal-800 mt-4 lg:mt-0 transition'
						>
							Logout
						</a>
					</div>
				</div>
			</nav>
		</div>
	)
}
