import React, { FC } from "react"
import IconProps from "./types/icon-type"

const FileIconNew: FC<IconProps> = (props) => {
  const { fill, size, ...attributes } = props
  const line = fill || "#2DD4BF"
  return (
    <svg 
        width={size || 20}
        height={size || 20} 
        viewBox="0 0 41 41" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        {...attributes}
    >
        <g clip-path="url(#clip0_7031_86830)">
        <path d="M40.2528 4.51164C40.6979 3.89678 40.4216 2.76949 39.4193 2.74718C29.5355 2.52815 11.8717 2.33318 2.00976 3.17842C1.80658 3.19567 1.63682 3.26161 1.49326 3.35449C1.18641 3.51496 0.952294 3.81501 0.931727 4.25654C0.62803 10.7933 0.701342 25.5317 0.50048 32.0714C0.49708 32.1826 0.51209 32.2816 0.534648 32.375C0.551898 32.7852 0.78162 33.1798 1.29182 33.3268C5.04616 34.4045 10.0325 34.7806 15.3139 34.802C15.2741 34.0908 15.2703 33.3791 15.2699 32.666C10.4897 32.645 6.01265 32.3313 2.67231 31.4667C2.79165 27.234 2.80599 17.6746 2.88959 11.9089C14.5778 11.7949 26.2647 11.4987 37.9543 11.5863C37.9185 17.4635 38.0411 27.1433 38.2958 31.4834C35.2405 31.6932 31.2807 32.0196 27.0253 32.2768C27.04 32.9915 27.1167 33.6973 27.2172 34.4014C31.7103 34.1276 35.9076 33.7806 39.2038 33.581C39.5309 33.5612 39.7787 33.4227 39.9517 33.2272C40.2836 33.0815 40.5278 32.7711 40.4975 32.2873C40.0897 25.7599 39.9799 11.3657 40.2528 4.51164ZM37.9749 9.42952C26.2906 9.34145 14.6086 9.63735 2.92567 9.75171C2.95618 8.12723 2.99516 6.60228 3.04592 5.25911C12.1204 4.54739 28.9893 4.67734 38.0831 4.8748C38.0325 6.24144 37.9972 7.78655 37.9749 9.42952Z" fill="#BBBBBB"/>
        <path d="M5.67558 6.30469C4.28522 6.30469 4.28522 8.46092 5.67558 8.46092C7.06636 8.46084 7.06636 6.30469 5.67558 6.30469Z" fill="#BBBBBB"/>
        <path d="M9.44902 6.19531C8.05866 6.19531 8.05866 8.35147 9.44902 8.35147C10.8398 8.35147 10.8398 6.19531 9.44902 6.19531Z" fill="#BBBBBB"/>
        <path d="M13.4373 5.98047C12.0469 5.98047 12.0469 8.13662 13.4373 8.13662C14.8281 8.13662 14.8281 5.98047 13.4373 5.98047Z" fill="#BBBBBB"/>
        <path d="M31.1031 27.2208C31.3828 26.9201 31.4859 26.4818 31.187 26.0282C28.7352 22.3059 25.7948 18.9966 22.5016 15.999C21.8552 15.4109 21.0102 15.7973 20.7304 16.398C17.8278 19.7896 15.2127 23.4201 12.0284 26.5643C11.2358 27.3467 12.0539 28.4753 12.9197 28.3962C12.9491 28.3982 12.9759 28.4049 13.0064 28.4049H16.511C16.4596 29.3285 16.427 30.4268 16.4102 31.5715C16.405 31.9327 16.4012 32.2975 16.3991 32.6643C16.3947 33.3848 16.3964 34.1063 16.4037 34.8011C16.4107 35.4543 16.4218 36.0835 16.4383 36.6613C16.4305 36.6747 16.4248 36.689 16.4181 36.7026C16.0774 37.3586 16.3732 38.3386 17.3189 38.2872C17.378 38.2842 17.4374 38.2834 17.4966 38.28C17.5897 38.2859 17.6828 38.2852 17.7739 38.2699C20.1669 38.1588 22.5511 38.1856 24.9371 38.4308C25.5692 38.4956 25.9062 38.0791 25.9583 37.5952C26.0283 37.4647 26.0741 37.3123 26.0868 37.1371C26.0897 37.095 26.0927 37.0499 26.0956 37.0074C26.1478 36.2422 26.1874 35.3735 26.2189 34.4592C26.2426 33.761 26.262 33.0391 26.2779 32.3198C26.2863 31.9425 26.2939 31.5673 26.301 31.1963C26.3226 30.0677 26.3389 28.9849 26.3583 28.066C27.6352 28.0382 28.9099 27.972 30.1838 27.8656C30.6462 27.8269 30.9507 27.5565 31.1031 27.2208ZM25.2251 25.925C24.4068 25.9275 24.0736 26.6751 24.2189 27.2895C24.2189 27.2899 24.2189 27.2903 24.2189 27.2908C24.1921 28.4678 24.1722 29.8672 24.1445 31.3028C24.1373 31.6802 24.1293 32.0575 24.1209 32.4369C24.1045 33.1622 24.0842 33.879 24.059 34.5758C24.0484 34.882 24.0363 35.1819 24.0231 35.4762C24.0126 35.72 24.0021 35.9664 23.9895 36.1993C22.7303 36.0991 21.4711 36.0565 20.2107 36.0583C19.9658 36.0587 19.7204 36.0616 19.475 36.0654C19.1771 36.07 18.8788 36.0738 18.5801 36.0831C18.578 35.9837 18.5767 35.8768 18.5746 35.7752C18.5681 35.4485 18.5625 35.1149 18.5586 34.7726C18.5508 34.0781 18.5484 33.3606 18.5526 32.6357C18.5562 32.0567 18.564 31.4784 18.576 30.9074C18.6019 29.6625 18.648 28.4623 18.7209 27.4339C18.7399 27.1673 18.6743 26.9534 18.5575 26.7895C18.4 26.4796 18.097 26.248 17.6428 26.248H15.3043C17.604 23.7145 19.6697 20.9801 21.8789 18.3639C24.2979 20.6525 26.5113 23.1152 28.4409 25.8268C27.3703 25.8871 26.2989 25.9216 25.2251 25.925Z" fill="#BBBBBB"/>
        </g>
        <defs>
        <clipPath id="clip0_7031_86830">
        <rect width="40" height="40" fill="white" transform="translate(0.5 0.5)"/>
        </clipPath>
        </defs>
    </svg>
    

  )
}

export default FileIconNew
