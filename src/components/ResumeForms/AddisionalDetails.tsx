import { Input } from "../../utils/input"

export const AddisionalDetails = (): JSX.Element => {
  return (
    <div className="w-full">
      <div className="flex w-full justify-between mt-8">
        <Input title="Country" type="text" placeholder="" width="47" />
        <Input title="City" type="text" placeholder="" width="47" />
      </div>

      <div className="flex w-full justify-between mt-8">
        <Input title="Address" type="text" placeholder="" width="47" />
        <Input title="Nationality" type="text" placeholder="" width="47" />
      </div>

      <div className="flex w-full justify-between mt-8">
        <Input title="Place Of Birth" type="text" placeholder="" width="47" />
        <Input
          title="Date Of Birth"
          type="text"
          placeholder=""
          width="47"
          tooltipTitle="this is tooltip for example"
        />
      </div>
    </div>
  )
}
