import { getAllPatients } from '@/api/patient';

export default function useGetAllPatients() {
    const dataPatients = async () => {
        try {
            const result = await getAllPatients();    
            return {
                data: result
            };
        } catch (error) {
            console.log(error);
        }
    };

    return ({
        dataPatients
    });

}