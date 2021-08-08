import { createAction, props } from '@ngrx/store';
import Frog from './frog.model';


export const EndSelectFrogAction = createAction('[Frog] - End Select Frog');
export const BeginSelectFrogAction = createAction('[Frog] - Begin Select Frog');
export const GetFrogAction = createAction('[Frog] - Get Frog');
export const CreateFrogAction = createAction('[Frog] - Create Frog', props<Frog>());
export const BeginGetFrogAction = createAction('[Frog] - Begin Get Frog');
export const SuccessGetFrogAction = createAction('[Frog] - Sucess Get Frog', props<{ payload: Frog[] }>());
export const BeginCreateFrogAction = createAction('[Frog] - Begin Create Frog', props<{ payload: Frog }>());
export const SuccessCreateFrogAction = createAction('[Frog] - Sucess Create Frog', props<{ payload: Frog }>());
export const ErrorFrogAction = createAction('[Frog] - Error', props<Error>());
