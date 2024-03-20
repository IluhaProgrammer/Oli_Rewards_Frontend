import { IconType } from "react-icons"
import {InputHTMLAttributes } from 'react'

export interface IField extends InputHTMLAttributes<HTMLInputElement> {
    placeholder : string
    Icon ?: IconType
    error ?: string
    text ?: string
    str ?: string
}