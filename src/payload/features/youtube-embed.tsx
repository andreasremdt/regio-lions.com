'use client'

import { TextField, useFormFields } from '@payloadcms/ui'
import type { TextFieldClientProps } from 'payload'

export default function YouTubeEmbedFeature({
  field,
  forceRender,
  path,
  permissions,
  readOnly,
  renderedBlocks,
  schemaPath,
  validate,
}: TextFieldClientProps) {
  const videoIdField = useFormFields(([fields]) => fields['videoId'])
  console.log(videoIdField)
  return (
    <TextField
      field={field}
      forceRender={forceRender}
      path={path}
      permissions={permissions}
      readOnly={readOnly}
      renderedBlocks={renderedBlocks}
      schemaPath={schemaPath}
      validate={validate}
    />
  )
}
