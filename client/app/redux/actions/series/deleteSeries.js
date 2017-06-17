import { DEL_SERIES } from '../types';



export const deleteSeries = (ticker) => {
	return {
		type: DEL_SERIES,
		ticker,
	}
}