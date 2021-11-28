routine {
    id: String,
    name: String,
    description: String,
    priority: Number,
    active: Boolean,
    activities: [
        {
            activityId: String -> activity.id,
            dayOfWeek: Number,
            startTime: Number,
            endTime: Number,
        },
        {
            activityId: String -> activity.id,
            dayOfWeek: Number,
            startTime: Number,
            endTime: Number,
        }...
    ]
}

activity {
    id: String,
    name: String,
    description: String,
    priority: Number,
}


-------

Routines:
{
    id: 1,
    name: 'Sport',
    activities: [
        {
            activityId: 1,
            dayOfWeek: 2,
            startTime: 14,
            endTime: 16,
        },
        {
            activityId: 1,
            dayOfWeek: 4,
            startTime: 8,
            endTime: 9,
        },
        {
            activityId: 2,
            dayOfWeek: 6,
            startTime: 10,
            endTime: 11,
        }
    ]
}

Activities:
{
    id: 1,
    name: 'Bieganie'
}
{
    id: 2,
    name: 'Plywanie'
}