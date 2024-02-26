const cardData = [
    {
      id: 0,
      title: "Blog one",
      date: "JULY 23, 2022",
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/8bba/0412/e2ae760e042fb536660cc3cdf3d078cc?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZFvypDarp2gQH8h4jkN37en8oBypPDxjKcgF4r5Sg-R1KtxeNOeKRc-0LYcuPadfS3G6xRYw3pOH78nvTs5tFwXCWjLGwffcFXGkKEi6lcPDAf-Jaw27l2~POJOvAVFy06tgRg~79i1xOks7GAyXSiUYyYGdwCVoZGKZl~KZWMv7WkS0ydEdiZ5TS5M~PAa4E-CWgmjOxTzkdKpLW4KHB1nYSSoBA~Vbq8GI3vQ9Hkl2ZDa0qy6pqQFH0t1v55PuCHsDTW~gAGeKbLY8XOjKJs9adp1AWOdD7YSDSzILisTQinYOApCZVARR6m19a7~wQerKTjCX7QRrD-oXlzcgaA__",
      discription:
        "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    },
    {
      id: 1,
      title: "Blog two",
      date: "JULY 23, 2022",
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/bfde/8904/0b8b12a3905aae211b4670527c7c14f6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A4iMpJmBbPE5ut0wiOswB9rvTz9-ghhC3jyUqfDnrB3Jma5zL7mIQ8DovvmsUtVYSOSUk1Z-HWruCVMNkm7xokz4IevfYc0baE2XgOubEwq6b85wHJBx8gmOD2YY8LahL6ptot44I81j2ZfCnkBndzWsO590i00eXNya0x4W6RZy7Gtu5a40~K-sVEimJH2xEhFHfeKXeYK8xZhkZ4H4MZ0Hra2SyuIjSttgcNtxx5GUnWzI23BJVLmDFtwIsvOYoY-nToUR5ARwm53jTNj4tzEuvZn1tsZHy81BZLltXrXvVQgjsCa1vJZxgr4gO3B33L-drYBeFnZVzkmO8QLnMg__",
      discription:
        "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    },
    {
      id: 2,
      title: "Blog three",
      date: "JULY 23, 2022",
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/062a/3beb/3fd9a71d2711716f0bf2116a93ad6814?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IaoolPAqK3KNCIuHR6z-mbntwyUd2bu3HF-WtssXBpyQNtbJRCwCYkgnC3ioi8oMQWu6rB9bvSlXarvP9fEAfLJ1BDIz4JeJ86wQkisBJLCql468dtnXxACiNkTcpQDWOL-HTFO4MOksWOE8EnUO82FR0V05rVlCYiK6~YyLNnZtIjsPs6SLv8e6mg6HntTPp~rcZDmEvreFEQI5gec7niqHQe4Z7UQY9n6iGHstObBEHl3ILpu8Um~TcQ4gsNIwt0q0yR9H4tLgySluOmh4f6NxdjVmRQKPUXxTutRTK4a69YGsJJoNNnrBQTHO2uQiT9m2mzqXhZRZdAyrZmNqTg__",
      discription:
        "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    },
    {
      id: 3,
      title: "Blog four",
      date: "JULY 23, 2022",
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/5a4d/8928/842e1cf5e6ab208031fc99447598d14c?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BdQe8oZ00aLSmXoaxgRB8HtUBX~1qdwaBXpoKBWAZvrmwOrULe8JrbolSF3DROASX5PNn32J3KuPK3~frWwiC8k1Y~2YE0rVfwF4tK03Y7qrt-alhgTdpdLd0LUpUbjPht6gBVtrQrqWiVSZJrfv6XGE~EBBmHHRCR2rdtWXjRdp6LNl687Z-Hv6Lsq7zFiYVJ~4HcmITV0synke~h5Cvco7RHdIVRxlWVKnNqvzB-zL4~Z-RXEmX0dOyvNoNM5RLsHRbGEMqnfeDmuYTwC33GGFGTAtctE88rmVTIEV3~jer~ar8leuXP5030Y4aqIteB8BZ-~itV6Tg8SOqLty2Q__",
      discription:
        "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    },
    {
      id: 4,
      title: "Blog five",
      date: "JULY 23, 2022",
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/b7c7/13ea/e964d4bccf1ee2ab70109b006993d526?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J0c9tGClZsjAu6HRrH2DU97QbmXZsQO2fekGrOKnWak~B5CILgqrcYIAgF7QEaPNAcqcgLR-2HX3QMuSZHHirGA5btGWUrnfNgtw1r4b6mUVptRJXl8UaC62AQLNAY1tFI8~HcByiZ0wjR5~MgyjlQGqaig-cTafriYPCxqF8LaQCSmvfCGJiRFz2PEO1fQTFEJopraK--Q6iQshPkFI~w4xXDUggkNEXP4fIQFfj7C67CdpSMPqtyeTEUhxu7wlxj2X6LrOSCSELNPn0uOSqTwnqKO7Qshf9FAPFmtXitbTdUH8kzVeWKnpOi8-sd2kPpcEtdO~0jJx~tpaYGCUlw__",
      discription:
        "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    },
    {
      id: 5,
      title: "Blog six",
      date: "JULY 23, 2022",
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/9b72/8f07/4396bf39d3cbc0d14baeb0804fc69d9a?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZD9KWPgSHDi1CKYxlq1Kht2vWJxlu4jZP3P3BTKUBgRunAjZlN6uue96dm6Avo-sum4hqQW3LAsa4ZPCkDBKwOmWU0nd14YoMPx~eJ0g02FIW19O8oHx5DdJP5VaDp4gSKZjE~BaOlQcId3gdX92hLB-ELNXrp70pYElYJ0iNv69FRVr-B06ulvgyeg9hNqtP~Y81GBS7HSqS8c9hjRm15~N8p-gVY9T6lG9cJGa~E13JTnezxNUloWxR9HwjSVTITHF6H~5kuceWFf4RFAD50siFdqQXX7Rp61nFEw99BfoZZdN-M3KM94mWnkPabjDbKhof9nfpHbb-kUm~9x3fA__",
      discription:
        "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    },
  ];

  export default cardData