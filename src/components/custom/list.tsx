import { medications } from "../../data/data";

const MedicationsList = ({ medicationList }: { medicationList: typeof medications }) => (
    <div className="medications-list">
        {medicationList.map((med, index) => (
            <div key={index} className="medication-item">
                <h4 className="medication-name">
                    {med.name} {med.dosage}
                </h4>
                <p className="medication-instructions">{med.instructions}</p>
            </div>
        ))}
    </div>
);

export { MedicationsList }