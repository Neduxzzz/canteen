import { CakeIcon } from '@heroicons/react/24/outline';

export function Header() {
    return <header
    className="border -b border-gray-300 bg-white py-4 shadow-sm">
        <div className='flex gap-x-2'>
            <CakeIcon className="h-6 w-6 text-red-700" />
            <div className='text-2xl text-red-700 font-bold'>Valgykla</div>
        </div>
        </header>
}
