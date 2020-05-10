import * as React from 'react'
import { Box, BoxProps } from '@ui/base'

type EyeCrossedProps = BoxProps

const EyeCrossed: React.FC<EyeCrossedProps> = (props) => {
  return (
    <Box
      as="svg"
      width="21px"
      height="20px"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.21498 0.358032L0.917809 1.65521L4.64623 5.38362C4.29891 5.67147 3.95518 5.98059 3.61525 6.30932C2.85465 7.04486 2.16655 7.83011 1.56081 8.6157C1.19529 9.08975 0.93577 9.46265 0.793681 9.68482L0.4776 10.179L0.793681 10.6732C0.93577 10.8954 1.19529 11.2683 1.56081 11.7423C2.16655 12.5279 2.85465 13.3132 3.61525 14.0487C5.8447 16.2047 8.23698 17.5169 10.7388 17.5169C12.3173 17.5169 13.8522 16.9946 15.3301 16.0675L19.2626 20L20.5598 18.7028L2.21498 0.358032ZM13.9901 14.7275L12.6026 13.34C12.0564 13.6628 11.4192 13.848 10.7388 13.848C8.71249 13.848 7.06984 12.2053 7.06984 10.179C7.06984 9.49861 7.25506 8.86145 7.57782 8.31522L5.95055 6.68795C5.59521 6.9745 5.24158 7.28854 4.89051 7.62804C4.19873 8.29703 3.56817 9.01662 3.01357 9.73588C2.89379 9.89123 2.7831 10.0394 2.68191 10.179C2.7831 10.3186 2.89379 10.4668 3.01357 10.6222C3.56817 11.3414 4.19873 12.061 4.89051 12.73C6.81071 14.5869 8.80794 15.6825 10.7388 15.6825C11.8103 15.6825 12.9022 15.3451 13.9901 14.7275ZM8.96646 9.70385C8.92593 9.85541 8.90432 10.0147 8.90432 10.179C8.90432 11.1922 9.72564 12.0135 10.7388 12.0135C10.9031 12.0135 11.0624 11.9919 11.214 11.9514L8.96646 9.70385ZM18.1667 13.748L16.8695 12.4508C17.4512 11.8628 17.9858 11.2423 18.464 10.6222C18.5838 10.4668 18.6945 10.3186 18.7957 10.179C18.6945 10.0394 18.5838 9.89123 18.464 9.73588C17.9094 9.01662 17.2789 8.29703 16.5871 7.62804C14.6669 5.77111 12.6697 4.67558 10.7388 4.67558C10.2597 4.67558 9.77656 4.74302 9.29151 4.8728L7.84046 3.42175C8.78746 3.04416 9.75465 2.8411 10.7388 2.8411C13.2406 2.8411 15.6329 4.15333 17.8624 6.30932C18.6229 7.04486 19.311 7.83011 19.9168 8.6157C20.2823 9.08975 20.5418 9.46265 20.6839 9.68482L21 10.179L20.6839 10.6732C20.5418 10.8954 20.2823 11.2683 19.9168 11.7423C19.3929 12.4218 18.8074 13.101 18.1667 13.748Z"
        fill="black"
      />
    </Box>
  )
}

export default EyeCrossed