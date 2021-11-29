const generalInfo = [
    {
        row: [
            {
                name: "first_name",
                type: "text",
                label: "First name",
                required: true,
                placeholder: "",
                validation: {},
                disabled: true
            },
            {
                name: "last_name",
                type: "text",
                label: "Last name",
                required: false,
                placeholder: "",
                validation: {},
                disabled: true
            }
        ]
    },
    {
        row: [
            {
                name: "email",
                type: "email",
                label: "Email Address",
                required: true,
                placeholder: "",
                validation: {},
                disabled: true
            }
        ]
    },
    {
        row: [
            {
                name: "mobile",
                type: "text",
                label: "Mobile Number",
                required: true,
                placeholder: "",
                startLabel: "+91 ",
                validation: {},
                disabled: true
            },
            {
                name: "gender",
                type: "select",
                label: "Gender",
                required: true,
                placeholder: "",
                list: [
                    { id: 1, name: "female", label: "Female" },
                    { id: 2, name: "male", label: "Male" },
                    { id: 3, name: "other", label: "Other" }
                ],
                disabled: true
            }
        ]
    },
    {
        row: [
            {
                name: "year_of_experience",
                type: "text",
                label: "Years of experience",
                required: true,
                placeholder: "",
                endLabel: "years",
                validation: {},
                disabled: true
            }
        ]
    }
];
const bankDetails = [{}];

export const profileContent = {
    generalInfo,
    bankDetails
};
