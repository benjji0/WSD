<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <body>
        <h2 align="center">Store</h2>
        <table border="1">
          <tr bgcolor="coral">
            <th>prod</th>
            <th>category</th>
            <th>price</th>
            <th>Seller</th>
            <th>availability</th>
          </tr>
          <xsl:for-each select="store/prod">
            <xsl:sort select="cat" />
            <tr bgcolor="blanchedalmond">
              <td>
                <xsl:value-of select="name" />
              </td>
              <td>
                <xsl:value-of select="cat" />
              </td>
              <td bgcolor="darksalmon">
                <xsl:value-of select="price" />
              </td>
              <td>
                <xsl:value-of select="seller" />
              </td>
              <td bgcolor="aquamarine">
                <xsl:value-of select="availability" />
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>