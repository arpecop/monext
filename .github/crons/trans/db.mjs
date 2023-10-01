async function fetchGraphQL (operationsDoc, operationName, variables) {
  const result = await fetch('undefined', {
    method: 'POST',
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName
    })
  })

  return await result.json()
}

const operationsDoc = `
    mutation MyMutation($title: String = "", $nid: String = "", $date: String = "", $cat: String = "", $html: jsonb = "", $image: String = "", $link: String = "") {
      insert_newsbg(objects: {cat: $cat, date: $date, html: $html, image: $image, link: $link, title: $title, nid: $nid}) {
        affected_rows
      }
    }
  `

function executeMyMutation (title, nid, date, cat, html, image, link) {
  return fetchGraphQL(operationsDoc, 'MyMutation', {
    title: title,
    nid: nid,
    date: date,
    cat: cat,
    html: html,
    image: image,
    link: link
  })
}

export async function startExecuteMyMutation (
  title,
  nid,
  date,
  cat,
  html,
  image,
  link
) {
  const { errors, data } = await executeMyMutation(
    title,
    nid,
    date,
    cat,
    html,
    image,
    link
  )

  if (errors) {
    // handle those errors like a pro
    console.error(errors)
  }

  // do something great with this precious data
  console.log(data)
}
