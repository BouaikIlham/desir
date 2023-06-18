'use client'

import { Range, RangeKeyDict } from "react-date-range"

interface CalendarProps {
    disabledDates: Date[],
    value: Range,
    onChange: (value: RangeKeyDict) => void;
}
const Calendar: React.FC<CalendarProps> = ({
    disabledDates,
    value,
    onChange
}) => {
  return (
    <div>Calendar</div>
  )
}

export default Calendar