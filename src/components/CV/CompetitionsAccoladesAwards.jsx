import CVHeader from './CVHeader';

export default function CompetitionsAccoladesAwards({ awardsCompetitions }) {
    return (
        <div>
            {awardsCompetitions.map((award, index) => (
                <div key={index}>
                    <p>{award.description}</p>
                    <p>{award.date}</p>
                </div>
            ))}
        </div>
    )
}