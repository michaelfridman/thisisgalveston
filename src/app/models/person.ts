export interface Person{
    "count": number;
    "next": string;
    "previous": any;
    "results":
        {
            "resource_uri": string;
            "id": number;
            "race": any[];
            "sources": any[];
            "aba_ratings": any[];
            "educations": [
                {
                    "resource_uri": string;
                    "id": number;
                    "school": {
                        "resource_uri": string;
                        "id": number;
                        "is_alias_of": any;
                        "date_created": string;
                        "date_modified": string;
                        "name": string;
                        "ein": number;
                    }
                    "person": string;
                    "date_created": string;
                    "date_modified": string;
                    "degree_level": string;
                    "degree_detail": string;
                    "degree_year": number;
                }
            ];
            "positions": string[];
            "political_affiliations": any[];
            "is_alias_of": any;
            "date_created": string;
            "date_modified": string;
            "date_completed": any;
            "fjc_id": any;
            "cl_id": string;
            "slug": string;
            "name_first": string;
            "name_middle": string;
            "name_last": string;
            "name_suffix": string;
            "date_dob": any;
            "date_granularity_dob": string;
            "date_dod": any;
            "date_granularity_dod": string;
            "dob_city": string;
            "dob_state": string;
            "dob_country": string;
            "dod_city": string;
            "dod_state": string;
            "dod_country": string;
            "gender": string;
            "religion": string;
            "ftm_total_received": string;
            "ftm_eid": string;
            "has_photo": string;
          }}
