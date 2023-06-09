"use client";

import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import {
  PencilIcon,
  PlusCircleIcon,
  DocumentPlusIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

const TABLE_HEAD = [
  "Nama",
  "Biaya",
  "Reputasi",
  "Ketersediaan Beasiswa",
  "Fasilitas Pendidikan",
  "Kualitas Akademik",
  "Peluang Kerja",
  "",
];

const TABLE_ROWS = [
  {
    name: "John Michael",
    biaya: "john@creative-tim.com",
    reputasi: "Manager",
    beasiswa: "beasiswaanization",
    fasilitas: "dashda",
    kualitas: "23/04/18",
    peluang: "asdad",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    biaya: "alexa@creative-tim.com",
    reputasi: "Programator",
    beasiswa: "Developer",
    fasilitas: "dashda",
    kualitas: "23/04/18",
    peluang: "asdad",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    biaya: "laurent@creative-tim.com",
    reputasi: "Executive",
    beasiswa: "Projects",
    fasilitas: "dashda",
    kualitas: "19/09/17",
    peluang: "asdad",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    biaya: "michael@creative-tim.com",
    reputasi: "Programator",
    beasiswa: "Developer",
    fasilitas: "dashda",
    kualitas: "24/12/08",
    peluang: "asdad",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    biaya: "richard@creative-tim.com",
    reputasi: "Manager",
    beasiswa: "Executive",
    fasilitas: "dashda",
    kualitas: "04/10/21",
    peluang: "asdad",
  },
];

export default function Alternatif() {
  return (
    <div className="p-4">
      <h1>Alternatif</h1>
      <div className="flex items-center justify-between mt-4">
        <Card className="h-full w-full">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="mb-4 flex flex-col items-center justify-between gap-8 md:flex-row">
              <div>
                <Typography color="blue-gray" variant="h5" className="">
                  Data Alternatif
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  Halaman untuk mengelola data alternatif
                </Typography>
              </div>
              <div className="flex shrink-0 gap-2 flex-row ">
                <Button
                  className="flex items-center gap-3  text-xs"
                  color="green"
                  size="sm"
                >
                  <PlusCircleIcon strokeWidth={2} className="h-4 w-4" />
                  Tambah Data
                </Button>
                <Button
                  color="blue"
                  className="flex items-center gap-3"
                  size="sm"
                >
                  <DocumentPlusIcon strokeWidth={2} className="h-4 w-4" />
                  Import Data
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-end gap-4 md:flex-row">
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
            </div>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0">
            <table className="mt-4 w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head, index) => (
                    <th
                      key={head}
                      className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                      >
                        {head}{" "}
                        {index !== TABLE_HEAD.length - 1 && (
                          <ChevronUpDownIcon
                            strokeWidth={2}
                            className="h-4 w-4"
                          />
                        )}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(
                  (
                    {
                      name,
                      biaya,
                      beasiswa,
                      reputasi,
                      fasilitas,
                      kualitas,
                      peluang,
                    },
                    index
                  ) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={name}>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {name}
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {biaya}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {reputasi}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {beasiswa}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {fasilitas}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {kualitas}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {peluang}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex items-center justify-between">
                            <Tooltip content="Edit Data">
                              <IconButton variant="text" color="blue-gray">
                                <PencilIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip
                              content="Hapus Data"
                              className="bg-red-400"
                            >
                              <IconButton variant="text" color="red">
                                <TrashIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
          <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              Page 1 of 10
            </Typography>
            <div className="flex gap-2">
              <Button variant="outlined" color="blue-gray" size="sm">
                Previous
              </Button>
              <Button variant="outlined" color="blue-gray" size="sm">
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
