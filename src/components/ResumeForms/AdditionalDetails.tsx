import { Input } from "../../utils/input"

export const AdditionalDetails = (props: any): JSX.Element => {
  const { onChange, values } = props

  return (
    <div className="w-full">
      <div className="flex w-full justify-between mt-8">
        <Input
          title="Country"
          type="text"
          name="country"
          onChange={onChange}
          value={values.country}
          placeholder=""
          width="47"
        />
        <Input
          title="City"
          type="text"
          name="city"
          onChange={onChange}
          value={values.city}
          placeholder=""
          width="47"
        />
      </div>

      <div className="flex w-full justify-between mt-8">
        <Input
          title="Address"
          type="text"
          name="address"
          onChange={onChange}
          value={values.address}
          placeholder=""
          width="47"
        />
        <Input
          title="Nationality"
          type="text"
          name="nationality"
          onChange={onChange}
          value={values.nationality}
          placeholder=""
          width="47"
        />
      </div>

      <div className="flex w-full justify-between mt-8">
        <Input
          title="Place Of Birth"
          type="text"
          name="placeOfBirth"
          onChange={onChange}
          value={values.placeOfBirth}
          placeholder=""
          width="47"
        />
        <Input
          title="Date Of Birth"
          type="text"
          name="dateOfBirth"
          onChange={onChange}
          value={values.dateOfBirth}
          placeholder=""
          width="47"
          tooltipTitle="this is tooltip for example"
        />
      </div>
    </div>
  )
}
