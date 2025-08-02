import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationPinIcon from '@mui/icons-material/LocationPin';




export default function CVHeader({ name, contacts, tagline, aboutMe }) {
    return (
        <div className='flex flex-col items-start gap-3'>
            <div className='flex flex-col items-start'>
                <h1 className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary animate-gradient-x">{name}</h1>
                <p className="font-light text-sm">{tagline}</p>
                <p className='font-semibold text-sm'>
                    <EmailIcon fontSize='inherit' /> {contacts.email} ⁣ ⁣   <PhoneIcon fontSize='inherit'/> {contacts.phone} ⁣  <LocationPinIcon fontSize='inherit' /> {contacts.location}
                </p>
            </div>
            <div className='flex flex-col items-start'>
                <p className='font-bold text-lg text-secondary'>About Me</p>
                <p className="text-left">{aboutMe}</p>
            </div>

        </div>
    )
}