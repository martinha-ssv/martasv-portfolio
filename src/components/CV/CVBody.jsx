import CompetitionsAccoladesAwards from './CompetitionsAccoladesAwards';
export default function CVBody( cv ) {
    return (
        <div className='flex flex-col'>
            <CompetitionsAccoladesAwards cv={cv} />
        </div>
    );
}