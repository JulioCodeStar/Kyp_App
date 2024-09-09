import { getAllPatients, InsertNewsPatients, UpdatePatients } from '@/api/patient';

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

export const RegisterNewPatient = async (data) => {
    try {
        const result = await InsertNewsPatients(data);
        if (!result.success) {
            return {
                success: false,
                res: result.message
            }
        }

        return {
            success: true,
            res: result.message
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            res: error.message
        }
    }
}

export const UpdatedPatient = async (data, id) => {
    try {
        const result = await UpdatePatients(data, id);
        if (!result.success) {
            return {
                success: false,
                res: result.message
            }
        }

        return {
            success: true,
            res: result.message
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            res: error.message
        }
    }
}