'use client'
import { Select } from "antd"

const handleChange = (value: { value: string; label: React.ReactNode }) => {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  };

interface showSelect {
    genre: object,
    country: object,
    releaseYear: object,
    language: object,
    arrange: object,
}

export default function filterAll(ShowSelectFilter: Partial<showSelect>) {
    const filters:showSelect = {
        genre: {},
        country: {},
        releaseYear: {},
        language: {},
        arrange: {},
    }

    return (
        <div>
            {filters.genre && <Select labelInValue
                defaultValue={{ value: '-1', label: 'Thể Loại' }}
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                {
                    value: '-1',
                    label: 'Thể Loại',
                },
                ]}
            />}
              {filters.country && <Select labelInValue
                defaultValue={{ value: 'coutry', label: 'Quốc gia' }}
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                {
                    value: 'country',
                    label: 'Quốc gia',
                },
                ]}
            />}
              {filters.genre && <Select labelInValue
                defaultValue={{ value: 'lucy', label: 'Lucy (101)' }}
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                {
                    value: 'jack',
                    label: 'Jack (100)',
                },
                {
                    value: 'lucy',
                    label: 'Lucy (101)',
                },
                ]}
            />}
              {filters.genre && <Select labelInValue
                defaultValue={{ value: 'lucy', label: 'Lucy (101)' }}
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                {
                    value: 'jack',
                    label: 'Jack (100)',
                },
                {
                    value: 'lucy',
                    label: 'Lucy (101)',
                },
                ]}
            />}
              {filters.genre && <Select labelInValue
                defaultValue={{ value: 'lucy', label: 'Lucy (101)' }}
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                {
                    value: 'jack',
                    label: 'Jack (100)',
                },
                {
                    value: 'lucy',
                    label: 'Lucy (101)',
                },
                ]}
            />}


        </div>
    )
}